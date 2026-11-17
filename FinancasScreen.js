import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { addMov, listMovs, delMov, getConfig, setConfig, resumoMeses } from '../db/database';
import Bars from '../components/Bars';
import { primitives, pretty, fmt } from '../components/ui';

const mesActual = () => new Date().toISOString().slice(0, 7);

export default function FinancasScreen() {
  const { c } = useTheme();
  const [movs, setMovs] = useState([]);
  const [tipo, setTipo] = useState('despesa');
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  const [orc, setOrc] = useState('');
  const [negocio, setNegocio] = useState(null);
  const [erro, setErro] = useState('');
  const [serie, setSerie] = useState([]);

  const load = useCallback(async () => {
    setMovs(await listMovs(mesActual()));
    setSerie(await resumoMeses(6));
    getConfig('orcamento_pessoal').then((v) => v && setOrc(v));
    api.get('/receita/total').then(setNegocio).catch((e) => setErro(e.message));
  }, []);
  useEffect(() => { load(); }, [load]);

  const rec = movs.filter((m) => m.tipo === 'receita').reduce((s, m) => s + m.valor, 0);
  const des = movs.filter((m) => m.tipo === 'despesa').reduce((s, m) => s + m.valor, 0);
  const orcamento = Number(orc) || 0;

  const add = async () => {
    const v = Number(String(valor).replace(',', '.'));
    if (!v || v <= 0) return;
    await addMov(tipo, v, desc); setValor(''); setDesc(''); load();
  };
  const apagar = (m) => Alert.alert('Eliminar', (m.descricao || m.tipo) + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await delMov(m.id); load(); } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  const chip = (on, cor) => ({ flex: 1, padding: 10, borderRadius: 10, alignItems: 'center', marginRight: 8, backgroundColor: on ? cor : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Finanças</Text>

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Dinheiro do negócio</Text>
      <View style={card}>
        {negocio ? primitives(negocio).map(([k, v]) => <Text key={k} style={{ color: c.text }}>{pretty(k)}: <Text style={{ fontWeight: '700' }}>{fmt(v)}</Text></Text>)
          : <Text style={{ color: c.muted }}>{erro || 'A carregar...'}</Text>}
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Dinheiro pessoal — este mês</Text>
      <View style={card}>
        <Text style={{ color: c.text }}>Ganhou: <Text style={{ color: c.ok, fontWeight: '700' }}>{rec.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Gastou: <Text style={{ color: c.err, fontWeight: '700' }}>{des.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Saldo: <Text style={{ fontWeight: '700' }}>{(rec - des).toFixed(2)}</Text></Text>
        {orcamento > 0 && des > orcamento && <Text style={{ color: c.warn, marginTop: 6 }}>Os gastos passaram o orçamento de {orcamento.toFixed(2)}.</Text>}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <TextInput style={{ ...input, flex: 1, marginBottom: 0 }} value={orc} onChangeText={setOrc} keyboardType="numeric" placeholder="Orçamento mensal pessoal" placeholderTextColor={c.muted} />
        <TouchableOpacity onPress={async () => { await setConfig('orcamento_pessoal', orc); load(); }} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <TouchableOpacity style={chip(tipo === 'receita', c.ok)} onPress={() => setTipo('receita')}><Text style={{ color: tipo === 'receita' ? '#000' : c.text }}>Receita</Text></TouchableOpacity>
        <TouchableOpacity style={{ ...chip(tipo === 'despesa', c.err), marginRight: 0 }} onPress={() => setTipo('despesa')}><Text style={{ color: tipo === 'despesa' ? '#000' : c.text }}>Despesa</Text></TouchableOpacity>
      </View>
      <TextInput style={input} value={valor} onChangeText={setValor} keyboardType="numeric" placeholder="Valor" placeholderTextColor={c.muted} />
      <TextInput style={input} value={desc} onChangeText={setDesc} placeholder="Descrição" placeholderTextColor={c.muted} />
      <TouchableOpacity onPress={add} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Registar</Text></TouchableOpacity>

      {serie.length > 0 && (
        <View style={card}>
          <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Evolução mensal (receitas vs despesas)</Text>
          <Bars c={c} items={serie.flatMap((m) => [{ label: m.mes + ' receitas', value: m.receitas, color: c.ok }, { label: m.mes + ' despesas', value: m.despesas, color: c.err }])} />
        </View>
      )}

      {movs.map((m) => (
        <TouchableOpacity key={m.id} onLongPress={() => apagar(m)} style={{ ...card, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, flex: 1 }}>{m.descricao || pretty(m.tipo)} · {m.data.slice(5, 10)}</Text>
          <Text style={{ color: m.tipo === 'receita' ? c.ok : c.err, fontWeight: '700' }}>{m.tipo === 'receita' ? '+' : '-'}{m.valor.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar. Os valores pessoais ficam só no telemóvel.</Text>
    </ScrollView>
  );
}
