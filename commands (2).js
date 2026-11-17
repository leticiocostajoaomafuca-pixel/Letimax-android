import { Linking, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Brightness from 'expo-brightness';
import { VolumeManager } from 'react-native-volume-manager';
import { api } from './api';
import { biometricAuth } from './security';
import { listContactos, logVoz } from '../db/database';
import * as NB from './nativeBridge';

// SEGURANÇA: o Android não deixa uma app confirmar QUEM está a falar. Por isso estes comandos só correm
// com a APP já desbloqueada (PIN/biometria). Comandos críticos exigem "sim" falado + biometria nova.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const WAKE = /\b(letimax|letima x|leti max|let imax|letimacs|letimax)\b/;
let pending = null; // { fn, critico }

function falar(d) {
  if (d == null) return 'Sem dados.';
  if (typeof d === 'string') return d;
  const txt = d.resumo || d.texto || d.mensagem;
  if (txt) return String(txt);
  const partes = Object.entries(d).filter(([, v]) => v !== null && typeof v !== 'object').slice(0, 6).map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v);
  return partes.length ? partes.join('. ') : 'Recebi os dados, mas não há um resumo para ler.';
}
async function volume(delta, abs) {
  let cur = await VolumeManager.getVolume();
  cur = typeof cur === 'number' ? cur : (cur && cur.volume) != null ? cur.volume : 0.5;
  const v = abs != null ? abs : Math.min(1, Math.max(0, cur + delta));
  await VolumeManager.setVolume(v, { showUI: true });
  return v;
}
async function brilho(delta) {
  const cur = await Brightness.getBrightnessAsync();
  await Brightness.setBrightnessAsync(Math.min(1, Math.max(0.05, cur + delta)));
}
async function ligar(nome) {
  const [c] = await listContactos(nome);
  if (!c || !c.telefone) return 'Não encontrei o número de ' + nome + ' nos contactos.';
  const num = c.telefone.replace(/[^\d+]/g, '');
  const ok = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
  if (ok !== 'granted') { await Linking.openURL('tel:' + num); return 'A abrir o marcador para ' + c.nome + '.'; }
  await IntentLauncher.startActivityAsync('android.intent.action.CALL', { data: 'tel:' + num });
  return 'A ligar para ' + c.nome + '.';
}
const nao = (txt) => async () => txt;
const SEM_NATIVO = 'Ainda não consigo fazer isso: o Android só permite com código nativo adicional (Fase 4).';

const H = [
  { re: /^modo escuro$/, fn: async (m, x) => { await x.setMode('dark'); return 'Modo escuro activado.'; } },
  { re: /^modo claro$/, fn: async (m, x) => { await x.setMode('light'); return 'Modo claro activado.'; } },
  { re: /^(liga|ligar|acende) (a )?lanterna$/, fn: async (m, x) => ((await x.torch.setTorch(true)) ? 'Lanterna ligada.' : 'Preciso da permissão da câmara para a lanterna.') },
  { re: /^(desliga|desligar|apaga) (a )?lanterna$/, fn: async (m, x) => { await x.torch.setTorch(false); return 'Lanterna desligada.'; } },
  { re: /^(sobe|aumenta) (o )?volume$/, fn: async () => { await volume(0.15); return 'Volume aumentado.'; } },
  { re: /^(desce|diminui|baixa) (o )?volume$/, fn: async () => { await volume(-0.15); return 'Volume diminuído.'; } },
  { re: /^volume maximo$/, fn: async () => { await volume(0, 1); return 'Volume no máximo.'; } },
  { re: /^silencia$/, fn: async () => { await volume(0, 0); return 'Volume a zero.'; } },
  { re: /^aumenta (o )?brilho$/, fn: async () => { await brilho(0.2); return 'Brilho aumentado.'; } },
  { re: /^(diminui|baixa) (o )?brilho$/, fn: async () => { await brilho(-0.2); return 'Brilho diminuído.'; } },
  { re: /^(liga|desliga) (o )?wifi$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.WIFI_SETTINGS'); return 'Abri as definições de wifi. O Android não deixa uma app ligar ou desligar o wifi sozinha.'; } },
  { re: /^(liga|desliga) (o )?bluetooth$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.BLUETOOTH_SETTINGS'); return 'Abri as definições de bluetooth. O Android não deixa uma app ligar ou desligar o bluetooth sozinha.'; } },
  { re: /^liga para (.+)$/, confirm: (m) => 'Vou ligar para ' + m[1] + '.', fn: (m) => ligar(m[1]) },

  { re: /^modo autonomo total por (\d+) horas?$/, critico: true,
    confirm: (m) => 'Vou activar o modo autónomo total por ' + m[1] + ' horas. Os limites mantêm-se: sem gastar dinheiro, sem retirar dinheiro, sem mudar de nicho.',
    fn: async (m) => { await api.post('/autonomia/ativar', { nivel: 3, horas: Number(m[1]) }); return 'Modo autónomo total activo por ' + m[1] + ' horas.'; } },
  { re: /^(desactiva|desativa) (o )?modo autonomo$/, fn: async () => { await api.post('/autonomia/desativar', {}); return 'Modo autónomo desactivado.'; } },
  { re: /^modo normal$/, fn: async () => { await api.post('/autonomia/nivel', { nivel: 1 }); return 'Modo normal activo.'; } },

  { re: /^como estao as vendas$/, fn: async () => falar(await api.get('/relatorio')) },
  { re: /^quanto ganhei hoje$/, fn: async () => falar(await api.get('/receita/total')) },
  { re: /^qual a proxima oportunidade$/, fn: async () => {
      const d = await api.get('/motor-receita/oportunidades');
      const l = (Array.isArray(d) ? d : (d && d.oportunidades) || []).sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
      return l.length ? (l[0].titulo || l[0].nome) + ', pontuação ' + (l[0].pontuacao ?? 'desconhecida') + '.' : 'Não há oportunidades activas.';
  } },
  { re: /^(faz )?(o )?resumo do dia$/, fn: async () => falar(await api.get('/resumo-matinal')) },
  { re: /^(activa|ativa) (o )?raqueamento$/, critico: true,
    confirm: () => 'Vou activar o sistema de raqueamento, o último recurso.',
    fn: async () => { await api.post('/raqueamento/activar', {}); return 'Sistema de raqueamento activado.'; } },
  { re: /^faz (o )?plano da empresa$/, fn: async () => { await api.post('/empresa/plano', {}); return 'A gerar o plano da empresa. Aviso quando estiver pronto.'; } },

  { re: /^(pausa|continua|retoma|toca) (a )?musica$/, fn: () => NB.musica('play_pause') },
  { re: /^proxima musica$/, fn: () => NB.musica('next') },
  { re: /^musica anterior$/, fn: () => NB.musica('previous') },
  { re: /^desliga (o )?ecra$/, fn: () => NB.bloquearEcra() },
  { re: /^(atende|atender)( a)? chamada$/, fn: () => NB.atender() },
  { re: /^(rejeita|rejeitar)( a)? chamada$/, fn: () => NB.rejeitar() },
  { re: /^diz que estou ocupado$/, fn: () => NB.ocupado() },
  { re: /^(le|ler) (as )?(minhas )?mensagens$/, fn: () => NB.lerSms() },
  { re: /^(le|ler) (as )?(minhas )?notificacoes$/, fn: () => NB.lerNotificacoes() },
];

async function executar(p, texto) {
  if (p.critico && !(await biometricAuth())) return 'Autenticação biométrica falhou. Comando cancelado.';
  try { return await p.fn(); } catch (e) { return 'Não consegui executar: ' + e.message; }
}

// Devolve a resposta a falar, ou null se o texto não é um comando.
export async function runCommand(raw, ctx) {
  let t = norm(raw).replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax');
  if (pending) {
    const p = pending; pending = null;
    if (/^(sim|confirmo|confirmado)\b/.test(t)) { const r = await executar(p); await logVoz(raw, r); return r; }
    if (/^(nao|cancela|cancelar)\b/.test(t)) return 'Cancelado.';
  }
  const wake = WAKE.test(t);
  if (ctx.requireWake && !wake) return null;
  const cmd = wake ? t.replace(/^.*?\bletimax\b[ ,]*/, '') : t;
  for (const h of H) {
    const m = cmd.match(h.re);
    if (!m) continue;
    if (h.confirm) {
      pending = { fn: () => h.fn(m, ctx), critico: !!h.critico };
      const r = h.confirm(m) + ' Confirmas? Diz sim para confirmar.';
      await logVoz(raw, r); return r;
    }
    let r;
    try { r = await h.fn(m, ctx); } catch (e) { r = 'Não consegui executar: ' + e.message; }
    await logVoz(raw, r); return r;
  }
  return wake ? 'Não percebi o comando.' : null;
}
