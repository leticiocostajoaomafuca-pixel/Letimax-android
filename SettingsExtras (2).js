import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig, setConfig } from '../db/database';
import { verifyPin, setupPin, formatLock } from '../services/security';

const KEYS = ['hora_resumo', 'horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens', 'resp_email', 'resp_whatsapp',
  'meta_padrao', 'meta_memberships', 'meta_lista_emails', 'comissao_padrao', 'cookie_dias', 'nicho_novo'];

export default function SettingsExtras({ flash }) {
  const { c } = useTheme();
  const [v, setV] = useState({});
  const [auto, setAuto] = useState(true);
  const [nicho, setNicho] = useState('');
  const [pin, setPin] = useState({ a: '', b: '', c: '' });

  useEffect(() => {
    (async () => {
      const o = {};
      for (const k of KEYS) o[k] = (await getConfig(k)) || '';
      setV(o);
      setAuto((await getConfig('nicho_auto_aprovacao')) !== '0');
    })();
    api.get('/nichos').then((d) => setNicho(typeof d === 'string' ? d : JSON.stringify(d).slice(0, 160))).catch(() => {});
  }, []);

  const set = (k) => (t) => setV((x) => ({ ...x, [k]: t }));
  const salvar = async (ks, msg) => { for (const k of ks) await setConfig(k, v[k] || ''); flash(msg || 'Guardado.'); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const H = (t) => <Text style={{ color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>{t}</Text>;
  const F = (k, label, o = {}) => (
    <View key={k}>
      <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{label}</Text>
      <TextInput style={{ ...input, minHeight: o.multiline ? 70 : undefined }} value={v[k] || ''} onChangeText={set(k)} placeholder={o.ph || ''} placeholderTextColor={c.muted}
        keyboardType={o.num ? 'numeric' : 'default'} multiline={!!o.multiline} autoCapitalize="none" />
    </View>
  );
  const Btn = ({ t, f }) => <TouchableOpacity onPress={f} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>{t}</Text></TouchableOpacity>;

  const agendarResumo = async () => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(v.hora_resumo || '');
    if (!m) return flash('Use o formato HH:MM, por exemplo 08:00.');
    await setConfig('hora_resumo', v.hora_resumo);
    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({ id: 'resumo', name: 'Resumo matinal', importance: AndroidImportance.HIGH });
      const quando = new Date(); quando.setHours(Number(m[1]), Number(m[2]), 0, 0);
      if (quando.getTime() <= Date.now()) quando.setDate(quando.getDate() + 1);
      await notifee.createTriggerNotification(
        { id: 'resumo_matinal', title: 'Bom dia, Senhor Letício', body: 'Abra a LétimaX e toque em "Resumo matinal em voz alta" no Dashboard.', android: { channelId, pressAction: { id: 'default' } } },
        { type: TriggerType.TIMESTAMP, timestamp: quando.getTime(), repeatFrequency: RepeatFrequency.DAILY }
      );
      flash('Lembrete do resumo matinal agendado para as ' + v.hora_resumo + '.');
    } catch (e) { flash(e.message); }
  };

  const mudarNicho = async () => {
    if (!v.nicho_novo) return;
    try { await api.post(auto ? '/nichos/mudar' : '/nichos/aprovar', { nicho: v.nicho_novo }); flash('Pedido enviado. Só avança com a sua aprovação.'); }
    catch (e) { flash(e.message); }
  };
  const aplicarMeta = async () => {
    const n = Number(v.meta_padrao);
    await salvar(['meta_padrao', 'meta_memberships', 'meta_lista_emails'], 'Metas guardadas.');
    if (n) api.post('/metas/definir', { valor: n }).catch(() => {});
  };
  const aplicarAfiliados = async () => {
    await salvar(['comissao_padrao', 'cookie_dias'], 'Guardado.');
    api.post('/afiliados-proprios/criar-programa', { comissao: Number(v.comissao_padrao) || 50, cookie_dias: Number(v.cookie_dias) || 30 }).catch(() => {});
  };
  const alterarPin = async () => {
    if (pin.b.length < 6) return flash('O novo PIN deve ter pelo menos 6 dígitos.');
    if (pin.b !== pin.c) return flash('Os PINs novos não coincidem.');
    const r = await verifyPin(pin.a);
    if (!r.ok) return flash(r.locked ? formatLock(r.locked) : 'PIN actual incorrecto.');
    await setupPin(pin.b); setPin({ a: '', b: '', c: '' }); flash('PIN alterado.');
  };

  return (
    <View>
      {H('Geral')}
      {F('hora_resumo', 'Hora do resumo matinal (HH:MM)', { ph: '08:00' })}
      <Btn t="Agendar lembrete do resumo" f={agendarResumo} />
      {F('horario_inicio', 'Horário de trabalho: início', { ph: '03:00' })}
      {F('horario_fim', 'Horário de trabalho: fim', { ph: '23:00' })}
      {F('limite_gasto_diario', 'Limite de gasto diário com APIs (USD)', { num: true, ph: '10' })}
      {F('limite_tokens', 'Limite de tokens por conversa', { num: true, ph: '8000' })}
      <Btn t="Guardar" f={() => salvar(['horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens'])} />
      <Text style={{ color: c.muted, fontSize: 12 }}>Horário e limite de gasto ficam guardados no telemóvel. Para o servidor os aplicar, defina-os também no .env (HORARIO_INICIO, HORARIO_FIM, LIMITE_DIARIO_USD).</Text>

      {H('Respostas pré-aprovadas')}
      {F('resp_email', 'Email', { multiline: true })}
      {F('resp_whatsapp', 'WhatsApp', { multiline: true })}
      <Btn t="Guardar respostas" f={() => salvar(['resp_email', 'resp_whatsapp'])} />

      {H('Nichos')}
      <Text style={{ color: c.muted, marginBottom: 6 }}>{nicho ? 'Nicho actual: ' + nicho : 'Nicho actual: sem ligação ao servidor.'}</Text>
      {F('nicho_novo', 'Propor novo nicho')}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: c.text, flex: 1 }}>Mudança automática só com a minha aprovação</Text>
        <Switch value={auto} onValueChange={async (x) => { setAuto(x); await setConfig('nicho_auto_aprovacao', x ? '1' : '0'); }} trackColor={{ true: c.gold }} />
      </View>
      <Btn t="Enviar proposta" f={mudarNicho} />

      {H('Metas')}
      {F('meta_padrao', 'Meta mensal padrão (R$)', { num: true, ph: '2000' })}
      {F('meta_memberships', 'Meta de memberships', { num: true })}
      {F('meta_lista_emails', 'Meta da lista de emails', { num: true })}
      <Btn t="Guardar metas" f={aplicarMeta} />

      {H('Programa de afiliados')}
      {F('comissao_padrao', 'Comissão padrão por produto (%)', { num: true, ph: '50' })}
      {F('cookie_dias', 'Período de cookie (dias)', { num: true, ph: '30' })}
      <Btn t="Guardar" f={aplicarAfiliados} />

      {H('Segurança')}
      {[['a', 'PIN actual'], ['b', 'Novo PIN'], ['c', 'Repetir novo PIN']].map(([k, l]) => (
        <TextInput key={k} style={input} value={pin[k]} onChangeText={(t) => setPin((x) => ({ ...x, [k]: t }))} placeholder={l} placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} />
      ))}
      <Btn t="Alterar PIN" f={alterarPin} />
    </View>
  );
}
