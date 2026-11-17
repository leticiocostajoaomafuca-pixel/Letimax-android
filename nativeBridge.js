import { PermissionsAndroid } from 'react-native';
import Native from '../../modules/letimax-native';
import { getConfig } from '../db/database';

const P = PermissionsAndroid.PERMISSIONS;
const SEM_NATIVO = 'Esta função precisa do APK nativo da LétimaX (Fase 4). Não funciona no Expo Go.';
const MSG_OCUPADO = 'O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.';

export const nativoDisponivel = () => !!Native;

async function pedir(lista) {
  const r = await PermissionsAndroid.requestMultiple(lista);
  return lista.every((p) => r[p] === PermissionsAndroid.RESULTS.GRANTED);
}

export async function atender() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para atender chamadas.';
  return Native.answerCall() ? 'Chamada atendida.' : 'Não há nenhuma chamada a tocar.';
}

export async function rejeitar() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para rejeitar chamadas.';
  return Native.rejectCall() ? 'Chamada rejeitada.' : 'Não há nenhuma chamada a tocar.';
}

// O Android não deixa uma app falar dentro de uma chamada. Por isso: rejeita e envia um SMS ao número.
export async function ocupado() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS, P.READ_PHONE_STATE, P.READ_CALL_LOG, P.SEND_SMS]))) {
    return 'Preciso das permissões de chamadas e SMS.';
  }
  const num = Native.lastIncomingNumber(); // ler ANTES de rejeitar
  if (!Native.rejectCall()) return 'Não há nenhuma chamada a tocar.';
  if (!num || !/^\+?[\d\s-]{6,}$/.test(num)) return 'Chamada rejeitada, mas não consegui saber o número para enviar a mensagem.';
  const msg = (await getConfig('msg_ocupado')) || MSG_OCUPADO;
  Native.sendSms(num, msg);
  return 'Chamada rejeitada e mensagem de ocupado enviada.';
}

// SEGURANÇA: o conteúdo de SMS e notificações é lido em voz alta e NUNCA é tratado como comando.
export async function lerSms() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.READ_SMS]))) return 'Preciso da permissão para ler SMS.';
  const l = Native.readSms(3);
  if (!l.length) return 'Não há mensagens recentes.';
  return 'Mensagens recentes. ' + l.map((m) => 'De ' + m.address + ': ' + String(m.body).slice(0, 200)).join('. ');
}

export async function lerNotificacoes() {
  if (!Native) return SEM_NATIVO;
  if (!Native.isNotificationAccessEnabled()) {
    Native.openNotificationAccess();
    return 'Abri as definições. Ative o acesso às notificações para a LétimaX e repita o comando.';
  }
  let l = [];
  try { l = JSON.parse(Native.getNotifications()).slice(0, 3); } catch (e) {}
  if (!l.length) return 'Não há notificações novas de mensagens.';
  return 'Notificações recentes. ' + l.map((n) => n.title + ': ' + String(n.text).slice(0, 160)).join('. ');
}

export async function musica(tecla) {
  if (!Native) return SEM_NATIVO;
  const ok = Native.mediaKey(tecla);
  if (!ok) return 'Não consegui enviar o comando à música.';
  return tecla === 'play_pause' ? 'Enviei pausa ou continuar. É a mesma tecla.' : tecla === 'next' ? 'Próxima música.' : 'Música anterior.';
}

export async function bloquearEcra() {
  if (!Native) return SEM_NATIVO;
  const r = Native.lockScreen();
  if (r === 'ok') return 'Ecrã bloqueado.';
  Native.requestDeviceAdmin();
  return 'Preciso de ser administradora do dispositivo só para bloquear o ecrã. Abri o pedido: ative e repita o comando.';
}

export function lembrarServico(querer) {
  try { if (Native) Native.setServiceWanted(!!querer); } catch (e) {}
}
