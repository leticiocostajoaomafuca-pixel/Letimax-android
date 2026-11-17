import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, Alert, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const acao = (p, endpoint, texto, pergunta) => {
    const go = async () => {
      try { await api.post(endpoint, { id: p.id }); setMsg(texto); load(); } catch (e) { setMsg(e.message); }
    };
    if (pergunta) Alert.alert(texto, pergunta, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: go }]);
    else go();
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {['aprovado', 'aprovada'].includes(sem(p.estado)) && (
              <TouchableOpacity onPress={() => acao(p, '/publicar', 'Produto publicado.', 'Publicar "' + p.nome + '" nas plataformas?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.gold, marginRight: 6, marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>Publicar</Text></TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => acao(p, '/produtos/marca-dagua', 'Marca de água activada.')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Marca de água</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => acao(p, '/produtos/precificacao-dinamica', 'Preço dinâmico aplicado.', 'O preço pode mudar. Confirma?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Preço dinâmico</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
