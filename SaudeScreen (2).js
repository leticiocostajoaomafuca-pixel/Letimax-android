import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, TimeUnit } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { saveHumor, humorStats, getConfig, setConfig } from '../db/database';

const LEMBRETES = [
  { id: 'lembrete_agua', nome: 'Beber água', texto: 'Senhor Letício, hora de beber água.', min: 60 },
  { id: 'lembrete_pausa', nome: 'Pausa do ecrã', texto: 'Faça uma pausa de 5 minutos: levante-se e alongue-se.', min: 90 },
  { id: 'lembrete_exercicio', nome: 'Exercício', texto: 'Hora de se mexer um pouco.', min: 180 },
];

export default function SaudeScreen() {
  const { c } = useTheme();
  const [st, setSt] = useState({ n: 0, media: 0, bons: 0, hoje: null });
  const [sono, setSono] = useState('');
  const [on, setOn] = useState({});
  const [msg, setMsg] = useState('');

  const load = async () => {
    setSt(await humorStats());
    const o = {};
    for (const l of LEMBRETES) o[l.id] = (await getConfig(l.id)) === '1';
    setOn(o);
  };
  useEffect(() => { load(); }, []);

  const humor = async (v) => {
    const h = sono ? Number(String(sono).replace(',', '.')) : null;
    await saveHumor(v, h);
    api.post('/humor', { valor: v, sono: h }).catch(() => {});
    setMsg('Humor registado.'); load();
  };

  const lembrete = async (l, v) => {
    setOn((x) => ({ ...x, [l.id]: v }));
    await setConfig(l.id, v ? '1' : '0');
    try {
      if (v) {
        await notifee.requestPermission();
        const channelId = await notifee.createChannel({ id: 'lembretes', name: 'Lembretes de saúde', importance: AndroidImportance.DEFAULT });
        await notifee.createTriggerNotification(
          { id: l.id, title: 'LétimaX', body: l.texto, android: { channelId, pressAction: { id: 'default' } } },
          { type: TriggerType.INTERVAL, interval: l.min, timeUnit: TimeUnit.MINUTES }
        );
      } else await notifee.cancelTriggerNotification(l.id);
    } catch (e) { setMsg(e.message); }
  };

  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Saúde e bem-estar</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Como está hoje? (1 a 5)</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        {[1, 2, 3, 4, 5].map((v) => (
          <TouchableOpacity key={v} onPress={() => humor(v)} style={{ flex: 1, padding: 14, borderRadius: 10, alignItems: 'center', marginRight: v < 5 ? 6 : 0, backgroundColor: st.hoje === v ? c.gold : c.card }}>
            <Text style={{ color: st.hoje === v ? '#000' : c.text, fontWeight: '700', fontSize: 16 }}>{v}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput value={sono} onChangeText={setSono} keyboardType="numeric" placeholder="Horas de sono (opcional)" placeholderTextColor={c.muted}
        style={{ borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 14 }} />

      <View style={card}>
        <Text style={{ color: c.text }}>Registos: <Text style={{ fontWeight: '700' }}>{st.n}</Text> (últimos 30)</Text>
        <Text style={{ color: c.text }}>Humor médio: <Text style={{ fontWeight: '700' }}>{st.n ? st.media.toFixed(1) : '—'}</Text></Text>
        <Text style={{ color: c.text }}>Dias com humor 4 a 5: <Text style={{ fontWeight: '700' }}>{st.bons}</Text></Text>
        <Text style={{ color: c.muted, marginTop: 6, fontSize: 12 }}>Com o tempo, estes dados mostram em que dias rende mais.</Text>
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Lembretes</Text>
      {LEMBRETES.map((l) => (
        <View key={l.id} style={{ ...card, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text }}>{l.nome} <Text style={{ color: c.muted }}>(a cada {l.min} min)</Text></Text>
          <Switch value={!!on[l.id]} onValueChange={(v) => lembrete(l, v)} trackColor={{ true: c.gold }} />
        </View>
      ))}
    </ScrollView>
  );
}
