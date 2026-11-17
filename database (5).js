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
      CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
      CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS financas_pessoais (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, valor REAL, descricao TEXT, data TEXT);
      CREATE TABLE IF NOT EXISTS humor_produtividade (id INTEGER PRIMARY KEY AUTOINCREMENT, dia TEXT, humor INTEGER, sono REAL);
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

export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}
export async function saveMeta(valor) {
  const d = await getDb();
  await d.runAsync('INSERT INTO metas (mes, valor, criado_em) VALUES (?,?,?)', [new Date().toISOString().slice(0, 7), valor, new Date().toISOString()]);
}

export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, new Date().toISOString()]);
}

export async function addMov(tipo, valor, descricao) {
  const d = await getDb();
  await d.runAsync('INSERT INTO financas_pessoais (tipo, valor, descricao, data) VALUES (?,?,?,?)', [tipo, valor, descricao || '', new Date().toISOString()]);
}
export async function listMovs(mes) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM financas_pessoais WHERE data LIKE ? ORDER BY id DESC', [mes + '%']);
}
export async function delMov(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM financas_pessoais WHERE id = ?', [id]);
}
export async function saveHumor(humor, sono) {
  const d = await getDb();
  const dia = new Date().toISOString().slice(0, 10);
  await d.runAsync('DELETE FROM humor_produtividade WHERE dia = ?', [dia]);
  await d.runAsync('INSERT INTO humor_produtividade (dia, humor, sono) VALUES (?,?,?)', [dia, humor, sono == null ? null : sono]);
}
export async function humorStats() {
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT humor, sono FROM humor_produtividade ORDER BY id DESC LIMIT 30');
  const n = rows.length;
  const media = n ? rows.reduce((s, r) => s + r.humor, 0) / n : 0;
  const bons = rows.filter((r) => r.humor >= 4).length;
  const hoje = await d.getFirstAsync('SELECT humor FROM humor_produtividade WHERE dia = ?', [new Date().toISOString().slice(0, 10)]);
  return { n, media, bons, hoje: hoje ? hoje.humor : null };
}
export async function replaceHistory(resumo) {
  const d = await getDb();
  await d.runAsync('DELETE FROM conversas');
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', ['bot', 'Resumo da conversa anterior: ' + resumo, new Date().toISOString()]);
}
