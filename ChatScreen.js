import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { falarVoz } from '../services/voz';
import { onBus } from '../services/bus';
import { isRede } from '../services/api';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages, getConfig, replaceHistory } from '../db/database';
import { api } from '../services/api';
import { useVoice } from '../services/useVoice';
import { runCommand } from '../services/commands';
import { TorchCtx } from '../components/TorchHost';

export default function ChatScreen() {
  const { c, setMode } = useTheme();
  const torch = useContext(TorchCtx);
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const [cont, setCont] = useState(false);
  const contRef = useRef(false);
  const timer = useRef(null);
  const voiceRef = useRef(null);
  const [limite, setLimite] = useState(8000);

  useEffect(() => onBus('conversas', () => { getMessages().then(setMsgs); }), []);
  useEffect(() => { getMessages().then(setMsgs); getConfig('limite_tokens').then((v) => Number(v) && setLimite(Number(v))); return () => { deactivateKeepAwake(); }; }, []);

  const tokens = Math.ceil(msgs.reduce((s, m) => s + (m.texto || '').length, 0) / 4);
  const resumir = async () => {
    setWait(2);
    try {
      const texto = msgs.slice(0, 40).reverse().map((m) => (m.papel === 'user' ? 'Senhor Letício: ' : 'LétimaX: ') + m.texto).join('\n');
      const r = await api.post('/chat', { mensagem: 'Resume esta conversa em até 10 linhas, mantendo decisões e pendências:\n' + texto }, 60000);
      await replaceHistory(r.resposta || r.response || JSON.stringify(r));
      setMsgs(await getMessages());
    } catch (e) { await push('bot', 'Não consegui resumir agora (' + e.message + ').'); }
    finally { setWait(0); }
  };

  const push = async (papel, texto) => { const m = await addMessage(papel, texto); setMsgs((x) => [m, ...x]); };
  // Pausa a escuta enquanto a LétimaX fala, para não ouvir a própria voz
  const falar = (t) => {
    const v = voiceRef.current;
    if (v) v.pause();
    falarVoz(t, () => v && v.resume());
  };

  const enviar = async (t) => {
    if (!t || wait) return;
    await push('user', t);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      falar(reply);
    } catch (e) {
      reply = isRede(e) ? 'Sem ligação ao servidor. Verifique a internet e envie de novo quando quiser.' : 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally { clearTimeout(timer.current); setWait(0); }
    await push('bot', reply);
  };

  const onFinal = async (t) => {
    const r = await runCommand(t, { setMode, torch, requireWake: contRef.current });
    if (r === null) { if (!contRef.current) enviar(t); return; } // push-to-talk sem comando = mensagem normal
    await push('user', t);
    await push('bot', r);
    falar(r);
  };

  const voice = useVoice(onFinal);
  voiceRef.current = voice;

  const toggleCont = async () => {
    const v = !cont;
    setCont(v); contRef.current = v;
    if (v) await activateKeepAwakeAsync(); else deactivateKeepAwake();
    voice.setContinuous(v);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 14, borderRadius: 15, marginVertical: 6, maxWidth: '88%', borderWidth: 1, borderColor: me ? c.gold : c.border, borderTopRightRadius: me ? 4 : 15, borderTopLeftRadius: me ? 15 : 4 }}>
        <Text style={{ color: c.text, fontSize: 15, lineHeight: 22 }}>{item.texto}</Text>
        <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 1.5, marginTop: 6 }}>{me ? 'LETÍCIO' : 'LÉTIMAX AI'}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <View style={{ paddingHorizontal: 18, paddingTop: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border, backgroundColor: c.bg }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: c.gold, fontSize: 19, fontWeight: '800', letterSpacing: 5 }}>LÉTIMAX</Text>
            <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 2, marginTop: 3 }}>INTELLIGENCE • PERSONAL SYSTEM</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: c.border, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: cont ? c.ok : c.gold, marginRight: 7 }} />
            <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 1 }}>{cont ? 'ESCUTA ACTIVA' : 'EM ESPERA'}</Text>
          </View>
        </View>
      </View>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12, flexGrow: 1 }}
        ListEmptyComponent={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 36, transform: [{ scaleY: -1 }] }}>
            <View style={{ width: 64, height: 64, borderRadius: 32, borderWidth: 1, borderColor: c.gold, backgroundColor: c.glow, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <Ionicons name="sparkles" size={28} color={c.gold} />
            </View>
            <Text style={{ color: c.gold, fontSize: 17, fontWeight: '700', letterSpacing: 1.2, textAlign: 'center' }}>Bem-vindo, senhor Letício à LétimaX, qual é a tarefa de hoje?</Text>
            <Text style={{ color: c.muted, fontSize: 12, lineHeight: 19, textAlign: 'center', marginTop: 12 }}>Pode escrever a sua tarefa ou usar o microfone para falar comigo.</Text>
          </View>
        }
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: c.card, borderWidth: 1, borderColor: c.border, borderRadius: 12, margin: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.gold, marginLeft: 10, fontSize: 11, letterSpacing: 1 }}>{wait === 2 ? 'A PROCESSAR PEDIDO...' : 'A ANALISAR...'}</Text>
          </View>
        ) : null} />
      {tokens > limite * 0.8 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: c.card }}>
          <Text style={{ color: c.warn, flex: 1, fontSize: 12 }}>{tokens >= limite ? 'Conversa acima do limite de tokens.' : 'A conversa aproxima-se do limite de tokens.'}</Text>
          <TouchableOpacity onPress={resumir}><Text style={{ color: c.gold, fontWeight: '700' }}>Resumir histórico</Text></TouchableOpacity>
        </View>
      )}
      {(voice.listening || voice.transcribing || cont || voice.partial) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.transcribing ? 'A TRANSCRIVER ÁUDIO COM WHISPER...' : voice.partial || (cont ? 'Escuta activa — diga o comando após a gravação' : 'A ouvir...')}
        </Text>
      )}
      <View style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 12, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center', backgroundColor: c.card }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 8, padding: 11, borderRadius: 14, borderWidth: 1, borderColor: cont ? c.gold : c.border, backgroundColor: cont ? c.glow : c.bg }}>
          <Ionicons name="ear" size={20} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.bg, borderWidth: 1, borderColor: c.border, borderRadius: 18, paddingHorizontal: 15, paddingVertical: 11, maxHeight: 110 }} multiline />
        <TouchableOpacity disabled={voice.transcribing} onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 7, padding: 11, borderRadius: 15, backgroundColor: voice.listening ? 'rgba(255,92,112,0.15)' : c.glow, borderWidth: 1, borderColor: voice.listening ? c.err : c.gold, opacity: voice.transcribing ? 0.55 : 1 }}>
          <Ionicons name={voice.transcribing ? 'hourglass' : voice.listening ? 'mic' : 'mic-outline'} size={21} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 7, backgroundColor: c.gold, borderRadius: 15, padding: 12 }}>
          <Ionicons name="arrow-up" size={20} color="#090806" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
