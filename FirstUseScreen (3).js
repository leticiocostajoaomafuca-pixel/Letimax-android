import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
