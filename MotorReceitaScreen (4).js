import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}
