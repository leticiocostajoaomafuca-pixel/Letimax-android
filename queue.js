import { getDb } from '../db/database';
import { api, isRede } from './api';

// Fila offline: acções POST feitas sem internet seguem quando a ligação volta. Expiram ao fim de 24 h.
let a_correr = false;
const DIA = 24 * 60 * 60 * 1000;

export async function enfileirar(metodo, endpoint, corpo, rotulo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO fila_tarefas (metodo, endpoint, corpo, rotulo, criado_em) VALUES (?,?,?,?,?)', [metodo, endpoint, JSON.stringify(corpo || {}), rotulo || endpoint, new Date().toISOString()]);
}
export async function listarFila() {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM fila_tarefas ORDER BY id DESC LIMIT 50');
}
export async function contarFila() {
  const d = await getDb();
  const r = await d.getFirstAsync("SELECT COUNT(*) AS n FROM fila_tarefas WHERE estado = 'pendente'");
  return r ? r.n : 0;
}
export async function limparFila() {
  const d = await getDb();
  await d.runAsync('DELETE FROM fila_tarefas');
}
export async function processarFila() {
  if (a_correr) return { feitas: 0 };
  a_correr = true;
  let feitas = 0;
  try {
    const d = await getDb();
    const rows = await d.getAllAsync("SELECT * FROM fila_tarefas WHERE estado = 'pendente' ORDER BY id ASC");
    for (const r of rows) {
      if (Date.now() - new Date(r.criado_em).getTime() > DIA) { await d.runAsync("UPDATE fila_tarefas SET estado = 'expirada' WHERE id = ?", [r.id]); continue; }
      try {
        await api.post(r.endpoint, JSON.parse(r.corpo || '{}'), 30000);
        await d.runAsync('DELETE FROM fila_tarefas WHERE id = ?', [r.id]);
        feitas++;
      } catch (e) {
        if (isRede(e)) break; // continua sem internet: tenta mais tarde
        const t = (r.tentativas || 0) + 1;
        await d.runAsync('UPDATE fila_tarefas SET tentativas = ?, estado = ? WHERE id = ?', [t, t >= 3 ? 'falhou' : 'pendente', r.id]);
      }
    }
  } finally { a_correr = false; }
  return { feitas };
}
