import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}
