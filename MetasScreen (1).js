import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}
