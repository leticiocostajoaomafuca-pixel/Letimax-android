import { getOwnerIdToken } from './firebaseAuth';
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}

export async function saveServerConfig(url, token) {
  const cleanUrl = String(url || '').trim().replace(/\/+$/, '');
  if (!/^https:\/\//i.test(cleanUrl)) {
    throw new Error('O URL do servidor tem de começar por https://');
  }
  await SecureStore.setItemAsync('server_url', cleanUrl);
  if (token && token.trim()) {
    await SecureStore.setItemAsync('server_token', token.trim());
  }
}

// A aplicação guarda a origem do servidor. As rotas REST usam /api;
// o WebSocket mantém a origem e o caminho próprios.
function restUrl(baseUrl, path) {
  const base = baseUrl.replace(/\/+$/, '');
  const route = String(path || '').startsWith('/') ? String(path) : '/' + String(path || '');
  const apiBase = /\/api$/i.test(base) ? base : base + '/api';
  return apiBase + (route === '/api' ? '' : route.startsWith('/api/') ? route.slice(4) : route);
}

async function request(method, path, body, timeout = 15000) {
  const { url, token: savedToken } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const token = (await getOwnerIdToken().catch(() => '')) || savedToken;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(restUrl(url, path), {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = typeof data.error === 'string' ? data.error : 'Servidor respondeu ' + res.status;
      throw new Error(message);
    }
    return data;
  } finally {
    clearTimeout(t);
  }
}

export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  patch: (p, b, t) => request('PATCH', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

export async function transcribeAudio(uri, timeout = 60000) {
  const { url, token: savedToken } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const token = (await getOwnerIdToken().catch(() => '')) || savedToken;
  const form = new FormData();
  form.append('audio', { uri, name: 'letimax-voice.m4a', type: 'audio/mp4' });
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(restUrl(url, '/speech/transcribe'), {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token },
      body: form,
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(typeof data.error === 'string' ? data.error : 'Falha no reconhecimento (' + res.status + ').');
    return data.texto || '';
  } catch (error) {
    if (error && error.name === 'AbortError') {
      throw new Error('O reconhecimento de voz demorou demasiado tempo. Verifique a internet e tente novamente.');
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export const isRede = (e) => !!e && (e.name === 'AbortError' || /Network request failed|Failed to fetch|timeout|URL do servidor/i.test(e.message || ''));

export async function rawPost(path, body, timeout = 20000) {
  const { url, token: savedToken } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const token = (await getOwnerIdToken().catch(() => '')) || savedToken;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    return await fetch(restUrl(url, path), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify(body || {}),
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(t);
  }
}
