import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { startService, stopService } from '../services/service';
import Native from '../../modules/letimax-native';
import { lembrarServico } from '../services/nativeBridge';
import SettingsExtras from './SettingsExtras';
import SettingsMais from './SettingsMais';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');
  const [servico, setServico] = useState(false);
  const [msgHoras, setMsgHoras] = useState('4');
  const [msgOcupado, setMsgOcupado] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
    getConfig('servico_activo').then((v) => setServico(v === '1'));
    getConfig('duracao_autonomo').then((v) => v && setMsgHoras(v));
    getConfig('msg_ocupado').then((v) => v && setMsgOcupado(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const aplicarNivel = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try {
      if (n === '1') await api.post('/autonomia/nivel', { nivel: 1 });
      else await api.post('/autonomia/ativar', { nivel: Number(n), horas: Number(await getConfig('duracao_autonomo')) || 4 });
    } catch (e) { flash('Guardado na APP; o servidor não respondeu.'); }
  };
  const setAuto = (n) => {
    if (n === '1') return aplicarNivel(n);
    const h = Number(msgHoras) || 4;
    Alert.alert(n === '3' ? 'Modo autónomo total' : 'Modo semi-autónomo', 'Activar por ' + h + ' horas? Mesmo assim nunca gasta em anúncios, nunca retira dinheiro e nunca muda de nicho.', [
      { text: 'Cancelar', style: 'cancel' }, { text: 'Activar', onPress: () => aplicarNivel(n) },
    ]);
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const toggleServico = async (v) => {
    setServico(v); await setConfig('servico_activo', v ? '1' : '0'); lembrarServico(v);
    try { if (v) await startService(); else await stopService(); } catch (e) { flash(e.message); }
  };
  const bateria = () =>
    IntentLauncher.startActivityAsync('android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', { data: 'package:com.letimax.app' })
      .catch(() => flash('Abra as definições de bateria e retire as restrições da LétimaX.'));

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Acesso nativo (APK da Fase 4)</Text>
      <Text style={{ color: Native ? c.ok : c.warn, marginBottom: 8 }}>{Native ? 'Módulo nativo activo.' : 'Módulo nativo indisponível (a correr no Expo Go).'}</Text>
      <TouchableOpacity disabled={!Native} onPress={() => Native.openNotificationAccess()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Acesso às notificações (WhatsApp, SMS, email)</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!Native} onPress={() => Native.requestDeviceAdmin()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Permitir bloquear o ecrã por voz</Text>
      </TouchableOpacity>
      <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>Mensagem de "estou ocupado" (enviada por SMS)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input} value={msgOcupado} onChangeText={setMsgOcupado} placeholder="O Senhor Letício está ocupado neste momento..." placeholderTextColor={c.muted} multiline />
        <TouchableOpacity onPress={async () => { await setConfig('msg_ocupado', msgOcupado); flash('Mensagem guardada.'); }} style={{ padding: 10, justifyContent: 'center' }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <Text style={h}>Serviço em segundo plano</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: c.text, flex: 1, marginRight: 10 }}>LétimaX sempre activa (alertas do servidor em tempo real)</Text>
        <Switch value={servico} onValueChange={toggleServico} trackColor={{ true: c.gold }} />
      </View>
      <TouchableOpacity onPress={bateria} style={{ marginTop: 10, padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Permitir uso sem limite de bateria</Text>
      </TouchableOpacity>

      <SettingsExtras flash={flash} />
      <SettingsMais flash={flash} />

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}
