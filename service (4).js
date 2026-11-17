import notifee, { AndroidImportance, AndroidForegroundServiceType } from '@notifee/react-native';
import { serverConfig } from './api';
import { receberSync } from './sync';

// Serviço em primeiro plano: mantém um WebSocket com o servidor e mostra alertas em tempo real.
// Assume que o servidor expõe wss://<servidor>/ws com Authorization: Bearer <token>
// e envia mensagens JSON {titulo, mensagem}.
let ws = null;
let stopped = true;
let retry = 0;
const SEGREDO = /(sk-[A-Za-z0-9_-]{10,}|key_[A-Za-z0-9]{10,})/;

async function alerta(m) {
  if (SEGREDO.test(JSON.stringify(m))) return; // nunca mostrar nada que pareça uma chave de API
  const channelId = await notifee.createChannel({ id: 'alertas', name: 'Alertas LétimaX', importance: AndroidImportance.HIGH });
  await notifee.displayNotification({ title: String(m.titulo || 'LétimaX'), body: String(m.mensagem || ''), android: { channelId, pressAction: { id: 'default' } } });
}

async function connect() {
  if (stopped) return;
  const { url, token } = await serverConfig();
  if (!url || !token) { setTimeout(connect, 30000); return; }
  const wsUrl = url.replace(/^http/i, 'ws').replace(/\/$/, '') + '/ws';
  try {
    ws = new WebSocket(wsUrl, null, { headers: { Authorization: 'Bearer ' + token } });
    ws.onopen = () => { retry = 0; };
    ws.onmessage = (e) => {
      try {
        const m = JSON.parse(e.data);
        if (m && m.tipo === 'sync_mensagem') receberSync(m); else alerta(m);
      } catch (err) {}
    };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (stopped) return;
      retry = Math.min(retry + 1, 6);
      setTimeout(connect, 2000 * 2 ** retry);
    };
  } catch (e) { setTimeout(connect, 30000); }
}

// A promessa nunca resolve: o serviço vive até stopForegroundService()
notifee.registerForegroundService(() => new Promise(() => { stopped = false; connect(); }));

export async function startService() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'servico', name: 'LétimaX activa', importance: AndroidImportance.LOW });
  await notifee.displayNotification({
    id: 'servico',
    title: 'LétimaX activa — a trabalhar para si',
    android: {
      channelId, asForegroundService: true, ongoing: true, pressAction: { id: 'default' },
      foregroundServiceTypes: [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_DATA_SYNC],
    },
  });
}
export async function stopService() {
  stopped = true;
  try { if (ws) ws.close(); } catch (e) {}
  await notifee.stopForegroundService();
}
