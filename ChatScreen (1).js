import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages } from '../db/database';
import { api } from '../services/api';

export default function ChatScreen() {
  const { c } = useTheme();
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const timer = useRef(null);

  useEffect(() => { getMessages().then(setMsgs); }, []);

  const send = async () => {
    const t = text.trim();
    if (!t || wait) return;
    setText('');
    const u = await addMessage('user', t);
    setMsgs((m) => [u, ...m]);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      Speech.speak(reply, { language: 'pt-PT' });
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally {
      clearTimeout(timer.current);
      setWait(0);
    }
    const b = await addMessage('bot', reply);
    setMsgs((m) => [b, ...m]);
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
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={send} style={{ marginLeft: 8, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
