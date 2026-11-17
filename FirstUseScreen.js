import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async (ir) => {
    if (busy) return;
    setBusy(true);
    try {
      if (url.trim()) await saveServerConfig(url, token);
      else if (token.trim()) throw new Error('Introduza também o endereço HTTPS do servidor.');
      await setConfig('primeiro_uso', '1');
      onDone(ir === true);
    } catch (e) {
      setMsg(e.message || 'Não foi possível guardar a configuração.');
    } finally {
      setBusy(false);
    }
  };

  const later = async () => {
    await setConfig('primeiro_uso', '1');
    onDone();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>LétimaX</Text>
      <Text style={{ color: c.text, fontSize: 20, fontWeight: '600', marginTop: 18 }}>Configuração inicial</Text>
      <Text style={{ color: c.muted, marginVertical: 12, lineHeight: 21 }}>
        Ligue a aplicação ao servidor. As chaves de IA são configuradas mais tarde nas Configurações; não precisa de as introduzir agora.
      </Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://endereco-do-servidor" placeholderTextColor={c.muted} autoCapitalize="none" keyboardType="url" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token do servidor (se necessário)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity disabled={busy} onPress={() => save(false)} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', opacity: busy ? 0.6 : 1 }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{busy ? 'A guardar...' : 'Guardar e iniciar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={busy} onPress={() => save(true)} style={{ padding: 12, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Guardar e abrir Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={busy} onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar mais tarde</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
