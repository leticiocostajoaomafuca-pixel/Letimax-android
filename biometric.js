import { FACE_ANGLES, VOICE_ENROLL_PHRASES } from "../../../shared/constants.js";
import { FACE_MIN, VOICE_MIN } from "../../../shared/lockout.js";

const DB = "letimax-biometric";
const STORE = "profile";

function openIdb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function loadProfile() {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const q = db.transaction(STORE).objectStore(STORE).get("owner");
    q.onsuccess = () => resolve(q.result || null);
    q.onerror = () => reject(q.error);
  });
}

export async function saveProfile(profile) {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(profile, "owner");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function clearProfile() {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete("owner");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function cosine(a, b) {
  if (!a?.length || !b?.length || a.length !== b.length) return 0;
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (!na || !nb) return 0;
  return dot / Math.sqrt(na * nb);
}

export function embeddingFromImageData(data) {
  const bins = new Array(32).fill(0);
  for (let i = 0; i < data.length; i += 16) {
    const y = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    bins[Math.min(31, Math.floor((y / 255) * 32))]++;
  }
  const s = bins.reduce((a, b) => a + b, 0) || 1;
  return bins.map((n) => n / s);
}

export function avgEmbed(list) {
  if (!list.length) return [];
  const out = new Array(list[0].length).fill(0);
  for (const e of list) e.forEach((v, i) => (out[i] += v));
  return out.map((v) => v / list.length);
}

export function faceScore(live, stored) {
  return cosine(live, stored);
}

export function voiceScore(live, stored) {
  return cosine(live, stored);
}

export const THRESHOLDS = { FACE_MIN, VOICE_MIN, FACE_ANGLES, VOICE_ENROLL_PHRASES };

export async function captureFaceEmbed(video) {
  const canvas = document.createElement("canvas");
  canvas.width = 160;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, 160, 160);
  const img = ctx.getImageData(0, 0, 160, 160);
  return embeddingFromImageData(img.data);
}

export async function captureVoiceEmbed(stream, ms = 1800) {
  const ctx = new AudioContext();
  const src = ctx.createMediaStreamSource(stream);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 256;
  src.connect(analyser);
  const acc = new Array(analyser.frequencyBinCount).fill(0);
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const arr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(arr);
    arr.forEach((v, i) => (acc[i] += v));
    await new Promise((r) => setTimeout(r, 50));
  }
  await ctx.close();
  const s = acc.reduce((a, b) => a + b, 0) || 1;
  return acc.map((n) => n / s);
}

export function sessionSet(ok) {
  sessionStorage.setItem("letimax_owner", ok ? "1" : "0");
}
export function sessionOk() {
  return sessionStorage.getItem("letimax_owner") === "1";
}
export function sessionClear() {
  sessionStorage.removeItem("letimax_owner");
}
