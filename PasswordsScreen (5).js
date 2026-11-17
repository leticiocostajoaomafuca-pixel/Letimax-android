import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}
