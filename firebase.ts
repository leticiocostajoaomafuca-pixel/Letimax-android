import { cert, getApps, initializeApp, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { env } from "../config/env";

export function getFirebaseApp(): App {
  const projectId = env.FIREBASE_PROJECT_ID;
  const clientEmail = env.FIREBASE_CLIENT_EMAIL;
  const privateKey = env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Firebase Admin não está configurado.");
  }

  return getApps()[0] ?? initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    }),
    projectId,
  });
}

export async function verifyFirebaseIdToken(token: string) {
  return getAuth(getFirebaseApp()).verifyIdToken(token, true);
}
