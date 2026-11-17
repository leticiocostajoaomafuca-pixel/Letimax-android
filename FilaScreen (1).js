import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { listarFila, processarFila, limparFila } from '../services/queue';

export default function FilaScreen() {
  const { c } = useTheme();
  const [rows, setRows] = useState([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => { setRows(await listarFila()); }, []);
  useEffect(() => { load(); }, [load]);

  const agora = async () => {
    setLoading(true);
    try { const r = await processarFila(); setMsg(r.feitas ? r.feitas + ' tarefa(s) enviada(s).' : 'Nada foi enviado (sem ligação ou fila vazia).'); } catch (e) { setMsg(e.message); }
    await load(); setLoading(false);
  };
  const limpar = () => Alert.alert('Limpar fila', 'As tarefas ainda não enviadas serão descartadas. Confirma?', [
    { text: 'Cancelar', style: 'cancel' }, { text: 'Limpar', style: 'destructive', onPress: async () => { await limparFila(); load(); } },
  ]);
  const cor = (e) => (e === 'pendente' ? c.warn : e === 'falhou' || e === 'expirada' ? c.err : c.ok);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Fila offline</Text>
      <Text style={{ color: c.muted, marginTop: 6, marginBottom: 12 }}>Acções feitas sem internet seguem sozinhas quando a ligação volta (até 24 horas). Acções perigosas, como reembolsos, nunca entram na fila.</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        <TouchableOpacity onPress={agora} style={{ backgroundColor: c.gold, padding: 11, borderRadius: 10, marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Tentar agora</Text></TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={{ backgroundColor: c.card, padding: 11, borderRadius: 10 }}><Text style={{ color: c.err }}>Limpar fila</Text></TouchableOpacity>
      </View>
      {!rows.length && <Text style={{ color: c.muted }}>Fila vazia.</Text>}
      {rows.map((r) => (
        <View key={r.id} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1 }}>{r.rotulo}</Text>
            <Text style={{ color: cor(r.estado), fontWeight: '700' }}>{r.estado}</Text>
          </View>
          <Text style={{ color: c.muted, fontSize: 12 }}>{r.endpoint} · {String(r.criado_em).slice(0, 16).replace('T', ' ')} · tentativas {r.tentativas}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
