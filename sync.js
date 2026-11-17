import { api } from './api';
import { getDb } from '../db/database';
import { emit } from './bus';

// Sincronização telemóvel <-> computador via servidor.
// ASSUNÇÃO: o servidor aceita POST /sync/mensagem e reenvia pelo /ws mensagens {tipo:'sync_mensagem', id_remoto, papel, texto}.
export const novoExtId = () => 'tel-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
export const syncEnviar = (m) => api.post('/sync/mensagem', m, 8000).catch(() => {});

// O conteúdo vindo do servidor é só texto guardado e mostrado: nunca é executado como comando.
export async function receberSync(m) {
  if (!m || typeof m.texto !== 'string' || typeof m.id_remoto !== 'string' || !['user', 'bot'].includes(m.papel)) return;
  const d = await getDb();
  const ja = await d.getFirstAsync('SELECT id FROM conversas WHERE ext_id = ?', [m.id_remoto]);
  if (ja) return;
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em, ext_id) VALUES (?,?,?,?)', [m.papel, m.texto.slice(0, 5000), new Date().toISOString(), m.id_remoto]);
  emit('conversas');
}
