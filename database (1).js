import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}
