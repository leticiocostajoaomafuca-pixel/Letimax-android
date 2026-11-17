import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

let authInstance;

function getFirebaseAuth() {
  if (authInstance) return authInstance;

  const config = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  };

  if (!config.apiKey || !config.projectId || !config.appId) {
    throw new Error('Firebase ainda não está configurado. Faltam as variáveis EXPO_PUBLIC_FIREBASE_*.');
  }

  const app = getApps().length ? getApp() : initializeApp(config);
  try {
    authInstance = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    // A instância pode já existir durante a recarga de desenvolvimento.
    authInstance = getAuth(app);
  }
  return authInstance;
}

export async function signInOwner(email, password) {
  const auth = getFirebaseAuth();
  const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
  const idToken = await credential.user.getIdToken(true);
  return { uid: credential.user.uid, email: credential.user.email, idToken };
}

export async function getOwnerIdToken() {
  const auth = getFirebaseAuth();
  const user = auth.currentUser;
  return user ? user.getIdToken() : '';
}

export async function signOutOwner() {
  const auth = getFirebaseAuth();
  await signOut(auth);
}
