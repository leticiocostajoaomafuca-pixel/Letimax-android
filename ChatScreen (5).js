import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
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
    Speech.speak(t, { language: 'pt-PT', onDone: () => v && v.resume(), onStopped: () => v && v.resume(), onError: () => v && v.resume() });
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
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
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
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      {tokens > limite * 0.8 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: c.card }}>
          <Text style={{ color: c.warn, flex: 1, fontSize: 12 }}>{tokens >= limite ? 'Conversa acima do limite de tokens.' : 'A conversa aproxima-se do limite de tokens.'}</Text>
          <TouchableOpacity onPress={resumir}><Text style={{ color: c.gold, fontWeight: '700' }}>Resumir histórico</Text></TouchableOpacity>
        </View>
      )}
      {(voice.listening || cont) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.partial ? '🎙 ' + voice.partial : cont ? 'Escuta contínua — diga "LétimaX, ..." (ecrã sempre ligado)' : 'A ouvir...'}
        </Text>
      )}
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 6, padding: 8 }}>
          <Ionicons name="ear" size={22} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 6, padding: 8 }}>
          <Ionicons name={voice.listening ? 'mic' : 'mic-outline'} size={24} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 2, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
