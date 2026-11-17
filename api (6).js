import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

// Erro de rede (sem internet / servidor inacessível / tempo esgotado): pode ir para a fila offline
export const isRede = (e) => !!e && (e.name === 'AbortError' || /Network request failed|Failed to fetch|timeout|URL do servidor/i.test(e.message || ''));

// Resposta crua (para áudio): o chamador trata do corpo
export async function rawPost(path, body, timeout = 20000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    return await fetch(url.replace(/\/$/, '') + path, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(body || {}), signal: ctrl.signal,
    });
  } finally { clearTimeout(t); }
}
