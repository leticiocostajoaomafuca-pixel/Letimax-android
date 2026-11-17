import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl, Alert, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Activo', 'Concluído', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => {
  const rows = Array.isArray(d) ? d : (d && (d.produtos || d.items)) || [];
  return rows.map((p) => ({
    ...p,
    nome: p.title || p.nome || 'Produto sem nome',
    nicho: p.niche || p.category || p.nicho || '—',
    preco: p.price ?? p.preco,
    tipo: p.productKind || p.tipo,
    estado: ({ draft: 'Rascunho', active: 'Activo', completed: 'Concluído', archived: 'Arquivado' })[p.status] || p.estado || p.status || 'Rascunho',
  }));
};

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [draft, setDraft] = useState({ nome: '', nicho: 'Marketing Digital com IA', descricao: '', preco: '', moeda: 'MZN', tipo: 'digital' });
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [pendingApprovals, setPendingApprovals] = useState({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/workspace?type=product');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const criarProduto = async () => {
    const preco = Number(String(draft.preco).replace(',', '.'));
    if (!draft.nome.trim() || !draft.descricao.trim() || !Number.isFinite(preco) || preco <= 0) {
      setMsg('Preencha o nome, a descrição e um preço válido maior que zero.');
      return;
    }
    setSaving(true); setMsg('');
    try {
      const payload = { title: draft.nome.trim(), niche: draft.nicho.trim(), category: draft.nicho.trim(), description: draft.descricao.trim(), price: preco, priceCurrency: draft.moeda, productKind: draft.tipo === 'digital' ? 'digital' : 'physical' };
      if (editingId) {
        await api.patch('/workspace/' + editingId, payload, 60000);
        setMsg('Produto actualizado com sucesso.');
      } else {
        await api.post('/workspace', { type: 'product', ...payload, status: 'draft' }, 60000);
        setMsg('Produto criado como rascunho.');
      }
      setDraft({ nome: '', nicho: 'Marketing Digital com IA', descricao: '', preco: '', moeda: 'MZN', tipo: 'digital' });
      setEditingId(null);
      setShowCreate(false);
      await load();
    } catch (e) { setMsg('Não foi possível criar o produto: ' + e.message); }
    finally { setSaving(false); }
  };

  const aprovar = async (p) => {
    if (pendingApprovals[p.id]) return;
    try {
      await api.post('/approvals', {
        actionType: 'publish_product',
        title: 'Aprovar publicação: ' + p.nome,
        summary: 'Produto ' + p.id + ' — ' + p.nome + '. A aprovação regista a decisão; não publica automaticamente em plataformas externas.',
      });
      setPendingApprovals((old) => ({ ...old, [p.id]: true }));
      setMsg('Pedido de aprovação registado. A publicação ainda não foi executada.');
    } catch (e) { setMsg(e.message); }
  };

  const alterarEstado = async (p, status) => {
    try {
      await api.patch('/workspace/' + p.id, { status });
      setMsg(status === 'archived' ? 'Produto arquivado.' : 'Produto restaurado.');
      await load();
    } catch (e) { setMsg('Não foi possível actualizar o estado: ' + e.message); }
  };

  const acao = (p, endpoint, texto, pergunta) => {
    const go = async () => {
      try { await api.post(endpoint, { id: p.id }); setMsg(texto); load(); } catch (e) { setMsg(e.message); }
    };
    if (pergunta) Alert.alert(texto, pergunta, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: go }]);
    else go();
  };

  const contagem = items.reduce((acc, p) => { const estado = sem(p.estado); acc.total += 1; if (estado.includes('aguarda')) acc.pendentes += 1; if (estado === 'activo' || estado === 'active') acc.publicados += 1; return acc; }, { total: 0, pendentes: 0, publicados: 0 });
  const lista = items.filter((p) => (filtro === 'Todos' || sem(p.estado) === sem(filtro)) && (!pesquisa.trim() || sem([p.nome, p.nicho, p.estado, p.descricao].filter(Boolean).join(' ')).includes(sem(pesquisa))));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <View style={{ backgroundColor: c.card, borderRadius: 18, borderWidth: 1, borderColor: c.gold, padding: 16, marginBottom: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: c.gold, fontSize: 10, fontWeight: '700', letterSpacing: 2 }}>GESTÃO DE CATÁLOGO</Text>
            <Text style={{ color: c.text, fontSize: 23, fontWeight: '700', marginTop: 5 }}>Produtos</Text>
          </View>
          <View style={{ width: 42, height: 42, borderRadius: 12, borderWidth: 1, borderColor: c.gold, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: c.gold, fontSize: 19, fontWeight: '800' }}>✦</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          {[['TOTAL', contagem.total], ['PENDENTES', contagem.pendentes], ['ACTIVOS', contagem.publicados]].map(([label, value]) => (
            <View key={label} style={{ flex: 1, backgroundColor: c.bg, borderRadius: 11, padding: 10, marginRight: label === 'PUBLICADOS' ? 0 : 7 }}>
              <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 1 }}>{label}</Text>
              <Text style={{ color: c.gold, fontSize: 21, fontWeight: '800', marginTop: 3 }}>{value}</Text>
            </View>
          ))}
        </View>
        <View style={{ marginTop: 12 }}>
          <View style={{ height: 7, borderRadius: 5, backgroundColor: c.border, overflow: 'hidden', flexDirection: 'row' }}>
            <View style={{ width: (contagem.total ? contagem.publicados / contagem.total * 100 : 0) + '%', backgroundColor: c.ok }} />
            <View style={{ width: (contagem.total ? contagem.pendentes / contagem.total * 100 : 0) + '%', backgroundColor: c.warn }} />
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Distribuição do catálogo: activos e pendentes de aprovação</Text>
        </View>
      </View>
      <TextInput value={pesquisa} onChangeText={setPesquisa} placeholder="Pesquisar por nome, nicho ou estado…" placeholderTextColor={c.muted}
        style={{ borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 11, paddingHorizontal: 13, paddingVertical: 11, marginBottom: 12 }} />
      <TouchableOpacity onPress={() => setShowCreate((v) => !v)} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 11, alignItems: 'center', marginBottom: 12 }}>
        <Text style={{ color: '#000', fontWeight: '800' }}>{showCreate ? 'Fechar formulário' : '+ Criar produto'}</Text>
      </TouchableOpacity>
      {showCreate && (
        <View style={{ backgroundColor: c.card, borderRadius: 16, borderWidth: 1, borderColor: c.gold, padding: 14, marginBottom: 14 }}>
          <Text style={{ color: c.gold, fontWeight: '800', letterSpacing: 1, marginBottom: 10 }}>{editingId ? 'EDITAR PRODUTO' : 'NOVO PRODUTO · RASCUNHO'}</Text>
          {[['nome', 'Nome do produto'], ['nicho', 'Nicho'], ['preco', 'Preço'], ['descricao', 'Descrição do produto']].map(([key, label]) => (
            <TextInput key={key} value={draft[key]} onChangeText={(v) => setDraft((old) => ({ ...old, [key]: v }))} placeholder={label} placeholderTextColor={c.muted}
              keyboardType={key === 'preco' ? 'decimal-pad' : 'default'} multiline={key === 'descricao'}
              style={{ borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 11, marginBottom: 8, minHeight: key === 'descricao' ? 84 : undefined }} />
          ))}
          <Text style={{ color: c.muted, fontSize: 12, marginBottom: 6 }}>Moeda do preço</Text>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {['MZN', 'USD'].map((moeda) => <TouchableOpacity key={moeda} onPress={() => setDraft((old) => ({ ...old, moeda }))} style={{ flex: 1, padding: 10, borderRadius: 9, backgroundColor: draft.moeda === moeda ? c.gold : c.bg, marginRight: moeda === 'MZN' ? 8 : 0, alignItems: 'center' }}>
              <Text style={{ color: draft.moeda === moeda ? '#000' : c.text, fontWeight: '700' }}>{moeda}</Text>
            </TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {['digital', 'fisico'].map((tipo) => <TouchableOpacity key={tipo} onPress={() => setDraft((old) => ({ ...old, tipo }))} style={{ flex: 1, padding: 10, borderRadius: 9, backgroundColor: draft.tipo === tipo ? c.gold : c.bg, marginRight: tipo === 'digital' ? 8 : 0, alignItems: 'center' }}>
              <Text style={{ color: draft.tipo === tipo ? '#000' : c.text, fontWeight: '700' }}>{tipo === 'digital' ? 'Digital' : 'Físico'}</Text>
            </TouchableOpacity>)}
          </View>
          <TouchableOpacity disabled={saving} onPress={criarProduto} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', opacity: saving ? 0.55 : 1 }}>
            <Text style={{ color: '#000', fontWeight: '800' }}>{saving ? 'A guardar…' : editingId ? 'Guardar alterações' : 'Guardar como rascunho'}</Text>
          </TouchableOpacity>
          <Text style={{ color: c.muted, fontSize: 11, marginTop: 8 }}>{editingId ? 'As alterações serão guardadas na sua conta.' : 'Criar não publica. A publicação continua sujeita à aprovação explícita.'}</Text>
        </View>
      )}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 18, borderWidth: 1, borderColor: c.border }}><Text style={{ color: c.text, fontWeight: '700' }}>{pesquisa ? 'Nenhum resultado encontrado.' : 'Ainda não há produtos nesta lista.'}</Text><Text style={{ color: c.muted, marginTop: 5 }}>{pesquisa ? 'Experimente outro termo de pesquisa ou limpe o campo.' : 'Quando os produtos forem recebidos do servidor, aparecerão aqui.'}</Text></View>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome || 'Produto sem nome'}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? (p.priceCurrency || 'MZN') + ' ' + p.preco : ''}</Text>
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
            <TouchableOpacity onPress={() => {
              setDraft({ nome: p.nome || '', nicho: p.nicho || '', descricao: p.description || p.descricao || '', preco: String(p.preco ?? ''), moeda: p.priceCurrency || 'MZN', tipo: p.tipo === 'physical' || p.tipo === 'fisico' ? 'fisico' : 'digital' });
              setEditingId(p.id); setShowCreate(true);
            }} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, borderWidth: 1, borderColor: c.gold, marginRight: 6, marginBottom: 6 }}>
              <Text style={{ color: c.gold, fontWeight: '700' }}>Editar</Text>
            </TouchableOpacity>
            {sem(p.estado) === 'rascunho' && (
              <TouchableOpacity disabled={!!pendingApprovals[p.id]} onPress={() => aprovar(p)} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: pendingApprovals[p.id] ? c.border : c.gold, marginRight: 6, marginBottom: 6 }}>
                <Text style={{ color: pendingApprovals[p.id] ? c.muted : '#000', fontWeight: '700' }}>{pendingApprovals[p.id] ? 'Aprovação solicitada' : 'Pedir aprovação'}</Text>
              </TouchableOpacity>
            )}
            {sem(p.estado) !== 'arquivado' ? (
              <TouchableOpacity onPress={() => Alert.alert('Arquivar produto', 'O produto deixará de aparecer na lista activa. Confirma?', [{ text: 'Cancelar', style: 'cancel' }, { text: 'Arquivar', style: 'destructive', onPress: () => alterarEstado(p, 'archived') }])} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, borderWidth: 1, borderColor: c.border, marginRight: 6, marginBottom: 6 }}>
                <Text style={{ color: c.muted }}>Arquivar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => alterarEstado(p, 'draft')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, borderWidth: 1, borderColor: c.gold, marginRight: 6, marginBottom: 6 }}>
                <Text style={{ color: c.gold }}>Restaurar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
