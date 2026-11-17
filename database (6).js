import * as SQLite from 'expo-sqlite';
import { criarTabelas, ESPELHO, GENERICAS } from './schema';

let dbp;
export function getDb() {
  if (!dbp) {
    dbp = (async () => {
      const d = await SQLite.openDatabaseAsync('letimax.db');
      await criarTabelas(d);
      return d;
    })();
  }
  return dbp;
}
const agora = () => new Date().toISOString();

// ---------- conversas ----------
export async function addMessage(papel, texto, extId) {
  const d = await getDb();
  const criado_em = agora();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em, ext_id) VALUES (?,?,?,?)', [papel, texto, criado_em, extId || null]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function replaceHistory(resumo) {
  const d = await getDb();
  await d.runAsync('DELETE FROM conversas');
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', ['bot', 'Resumo da conversa anterior: ' + resumo, agora()]);
}

// ---------- configurações e cache ----------
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function delConfig(chave) {
  const d = await getDb();
  await d.runAsync('DELETE FROM configuracoes WHERE chave = ?', [chave]);
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), agora()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}

// ---------- espelho das listas do servidor (offline + backup) ----------
export async function espelhar(tabela, lista) {
  if (!ESPELHO.includes(tabela)) return;
  const d = await getDb();
  const t = agora();
  await d.withTransactionAsync(async () => {
    await d.runAsync('DELETE FROM ' + tabela);
    for (const it of lista.slice(0, 500)) {
      await d.runAsync('INSERT INTO ' + tabela + ' (ext_id, dados, atualizado) VALUES (?,?,?)', [it && it.id != null ? String(it.id) : null, JSON.stringify(it), t]);
    }
  });
}
export async function localList(tabela) {
  if (tabela === 'tentativas_acesso') {
    const t = await listTentativas(30);
    return t.map((r) => ({ id: r.id, metodo: r.metodo, sucesso: r.sucesso ? 'Sim' : 'Não', quando: String(r.criado_em).slice(0, 16).replace('T', ' ') }));
  }
  if (!ESPELHO.includes(tabela) && !GENERICAS.includes(tabela)) return [];
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT id, ext_id, dados FROM ' + tabela + ' ORDER BY id DESC LIMIT 100');
  return rows.map((r) => { let o = {}; try { o = JSON.parse(r.dados || '{}'); } catch (e) {} return { id: r.ext_id || r.id, ...o }; });
}
export async function guardarLocal(tabela, obj) {
  if (!ESPELHO.includes(tabela) && !GENERICAS.includes(tabela)) return;
  const d = await getDb();
  await d.runAsync('INSERT INTO ' + tabela + ' (ext_id, dados, atualizado) VALUES (?,?,?)', [null, JSON.stringify(obj), agora()]);
}
export const registarDecisao = (acao, detalhe) => guardarLocal('diario_decisoes', { acao, detalhe, quando: agora().slice(0, 16).replace('T', ' ') });

// ---------- segurança ----------
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, agora()]);
}
export async function listTentativas(n = 15) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM tentativas_acesso ORDER BY id DESC LIMIT ?', [n]);
}

// ---------- contactos ----------
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

// ---------- metas ----------
export async function saveMetaProgress(valor, atual) {
  const d = await getDb();
  const mes = agora().slice(0, 7);
  const r = await d.getFirstAsync('SELECT id FROM metas WHERE mes = ? ORDER BY id DESC LIMIT 1', [mes]);
  if (r) await d.runAsync('UPDATE metas SET valor = ?, atual = ? WHERE id = ?', [valor, atual, r.id]);
  else await d.runAsync('INSERT INTO metas (mes, valor, criado_em, atual) VALUES (?,?,?,?)', [mes, valor, agora(), atual]);
}
export const saveMeta = (valor) => saveMetaProgress(valor, 0);
export async function listMetas() {
  const d = await getDb();
  return d.getAllAsync('SELECT mes, valor, atual FROM metas ORDER BY mes DESC, id DESC LIMIT 12');
}

// ---------- voz ----------
export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, agora()]);
}

// ---------- finanças pessoais ----------
export async function addMov(tipo, valor, descricao) {
  const d = await getDb();
  await d.runAsync('INSERT INTO financas_pessoais (tipo, valor, descricao, data) VALUES (?,?,?,?)', [tipo, valor, descricao || '', agora()]);
}
export async function listMovs(mes) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM financas_pessoais WHERE data LIKE ? ORDER BY id DESC', [mes + '%']);
}
export async function delMov(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM financas_pessoais WHERE id = ?', [id]);
}
export async function resumoMeses(n = 6) {
  const d = await getDb();
  const rows = await d.getAllAsync(
    "SELECT substr(data,1,7) AS mes, SUM(CASE WHEN tipo='receita' THEN valor ELSE 0 END) AS receitas, SUM(CASE WHEN tipo='despesa' THEN valor ELSE 0 END) AS despesas FROM financas_pessoais GROUP BY mes ORDER BY mes DESC LIMIT ?", [n]);
  return rows.reverse();
}

// ---------- saúde ----------
export async function saveHumor(humor, sono) {
  const d = await getDb();
  const dia = agora().slice(0, 10);
  await d.runAsync('DELETE FROM humor_produtividade WHERE dia = ?', [dia]);
  await d.runAsync('INSERT INTO humor_produtividade (dia, humor, sono) VALUES (?,?,?)', [dia, humor, sono == null ? null : sono]);
}
export async function humorStats() {
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT humor, sono FROM humor_produtividade ORDER BY id DESC LIMIT 30');
  const n = rows.length;
  const media = n ? rows.reduce((s, r) => s + r.humor, 0) / n : 0;
  const bons = rows.filter((r) => r.humor >= 4).length;
  const hoje = await d.getFirstAsync('SELECT humor FROM humor_produtividade WHERE dia = ?', [agora().slice(0, 10)]);
  return { n, media, bons, hoje: hoje ? hoje.humor : null };
}
