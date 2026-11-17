import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import CryptoJS from 'crypto-js';
import { getDb, getConfig, setConfig, delConfig } from '../db/database';
import { TODAS } from '../db/schema';

// Backup cifrado (.letimax): AES-256-CBC + HMAC-SHA256, chave derivada da palavra-passe com PBKDF2.
// O perfil de acesso (PIN), o cofre de passwords, os tokens do servidor e as chaves de API NÃO entram no backup.
const EXCLUIR = ['dashboard_cache', 'tentativas_acesso', 'fila_tarefas'];
const wa = (bytes) => CryptoJS.lib.WordArray.create(bytes);

function derivar(pass, salt) {
  const k = CryptoJS.PBKDF2(pass, salt, { keySize: 512 / 32, iterations: 10000, hasher: CryptoJS.algo.SHA256 });
  return { enc: CryptoJS.lib.WordArray.create(k.words.slice(0, 8), 32), mac: CryptoJS.lib.WordArray.create(k.words.slice(8, 16), 32) };
}
export function cifrar(texto, pass) {
  const salt = wa(Crypto.getRandomBytes(16));
  const iv = wa(Crypto.getRandomBytes(16));
  const k = derivar(pass, salt);
  const ct = CryptoJS.AES.encrypt(texto, k.enc, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).ciphertext.toString(CryptoJS.enc.Base64);
  const mac = CryptoJS.HmacSHA256(salt.toString() + iv.toString() + ct, k.mac).toString();
  return JSON.stringify({ v: 1, salt: salt.toString(), iv: iv.toString(), ct, mac });
}
export function decifrar(conteudo, pass) {
  let o;
  try { o = JSON.parse(conteudo); } catch (e) { throw new Error('Ficheiro .letimax inválido.'); }
  if (!o || o.v !== 1 || !o.salt || !o.iv || !o.ct || !o.mac) throw new Error('Ficheiro .letimax inválido.');
  const salt = CryptoJS.enc.Hex.parse(o.salt);
  const iv = CryptoJS.enc.Hex.parse(o.iv);
  const k = derivar(pass, salt);
  const mac = CryptoJS.HmacSHA256(o.salt + o.iv + o.ct, k.mac).toString();
  if (mac !== o.mac) throw new Error('Palavra-passe errada ou ficheiro alterado.');
  const dec = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(o.ct) }, k.enc, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return dec.toString(CryptoJS.enc.Utf8);
}

export const getPass = () => SecureStore.getItemAsync('backup_pass');
export const setPass = (p) => SecureStore.setItemAsync('backup_pass', p);

async function recolher() {
  const d = await getDb();
  const tabelas = {};
  for (const t of TODAS) {
    if (EXCLUIR.includes(t)) continue;
    tabelas[t] = await d.getAllAsync('SELECT * FROM ' + t);
  }
  return JSON.stringify({ versao: 1, criado: new Date().toISOString(), tabelas });
}

// Cria o ficheiro, guarda na pasta escolhida (se houver) e devolve o caminho local
export async function fazerBackup() {
  const pass = await getPass();
  if (!pass) throw new Error('Defina primeiro a palavra-passe do backup.');
  const conteudo = cifrar(await recolher(), pass);
  const nome = 'letimax_' + new Date().toISOString().slice(0, 10) + '.letimax';
  const local = FileSystem.cacheDirectory + nome;
  await FileSystem.writeAsStringAsync(local, conteudo, { encoding: FileSystem.EncodingType.UTF8 });
  const dir = await getConfig('backup_dir');
  let destino = 'só no telemóvel';
  if (dir) {
    try {
      const f = await FileSystem.StorageAccessFramework.createFileAsync(dir, nome.replace('.letimax', ''), 'application/octet-stream');
      await FileSystem.writeAsStringAsync(f, conteudo, { encoding: FileSystem.EncodingType.UTF8 });
      destino = 'na pasta escolhida';
    } catch (e) { destino = 'a pasta escolhida falhou (' + e.message + ')'; }
  }
  await setConfig('ultimo_backup', new Date().toISOString());
  return { local, destino };
}

// Backup diário: depois das 02:00, uma vez por dia
export async function autoBackup() {
  if (!(await getPass())) return false;
  const ultimo = await getConfig('ultimo_backup');
  const hoje = new Date().toISOString().slice(0, 10);
  if ((ultimo || '').slice(0, 10) === hoje || new Date().getHours() < 2) return false;
  await fazerBackup();
  return true;
}

export async function escolherPasta() {
  const p = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!p.granted) return null;
  await setConfig('backup_dir', p.directoryUri);
  return p.directoryUri;
}

export async function partilhar() {
  const { local } = await fazerBackup();
  if (!(await Sharing.isAvailableAsync())) throw new Error('Partilha indisponível neste telemóvel.');
  await Sharing.shareAsync(local, { mimeType: 'application/octet-stream', dialogTitle: 'Guardar backup da LétimaX' });
}

// Restaura de um .letimax: substitui os dados locais. O acesso (PIN) e o servidor têm de ser configurados de novo.
export async function restaurar(passOverride) {
  const r = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
  if (r.canceled || !r.assets || !r.assets[0]) return null;
  const pass = passOverride || (await getPass());
  if (!pass) throw new Error('Indique a palavra-passe do backup.');
  const texto = await FileSystem.readAsStringAsync(r.assets[0].uri, { encoding: FileSystem.EncodingType.UTF8 });
  const dados = JSON.parse(decifrar(texto, pass));
  if (!dados || dados.versao !== 1 || !dados.tabelas) throw new Error('Backup inválido.');
  const d = await getDb();
  let linhas = 0;
  await d.withTransactionAsync(async () => {
    for (const t of TODAS) {
      if (EXCLUIR.includes(t) || !Array.isArray(dados.tabelas[t])) continue;
      await d.runAsync('DELETE FROM ' + t);
      for (const row of dados.tabelas[t]) {
        const cols = Object.keys(row).filter((c) => /^[a-z_]+$/i.test(c));
        if (!cols.length) continue;
        await d.runAsync('INSERT INTO ' + t + ' (' + cols.join(',') + ') VALUES (' + cols.map(() => '?').join(',') + ')', cols.map((c) => row[c]));
        linhas++;
      }
    }
  });
  await delConfig('primeiro_uso'); // volta a pedir o servidor e o token neste dispositivo
  return linhas;
}
