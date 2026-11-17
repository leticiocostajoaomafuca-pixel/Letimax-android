import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const iconFor = (id) => ({
  afext: 'people-outline', afprop: 'git-network-outline', webinars: 'videocam-outline',
  email: 'mail-outline', analytics: 'analytics-outline', reputacao: 'shield-checkmark-outline',
  suporte: 'headset-outline', onboarding: 'rocket-outline', referencias: 'link-outline',
  paginas: 'browsers-outline', cursos: 'school-outline', sites: 'globe-outline',
  apres: 'easel-outline', automacao: 'hardware-chip-outline', oportunidades: 'bulb-outline',
  investimentos: 'trending-up-outline', empresa: 'business-outline', logs: 'receipt-outline',
  actualizacao: 'cloud-download-outline',
}[id] || 'grid-outline');

export default function ModuleScreen({ route, navigation }) {
  const { c } = useTheme();
  const { id, titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); }
      else setErr(e.message || 'Não foi possível carregar os dados.');
    } finally { setLoading(false); }
  }, [endpoint]);
  useEffect(() => { load(); }, [load]);
  const title = titulo || 'Módulo';
  const count = Array.isArray(data) ? data.length : data && Array.isArray(data.items) ? data.items.length : null;
  const panel = { backgroundColor: c.card, borderColor: c.border, borderWidth: 1, borderRadius: 17, padding: 15, marginBottom: 12 };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 34 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <View style={{ ...panel, backgroundColor: c.panel, borderColor: c.gold, padding: 18, overflow: 'hidden' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, padding: 10, backgroundColor: c.glow }}>
            <Ionicons name={iconFor(id)} size={24} color={c.gold} />
          </View>
          <View style={{ borderWidth: 1, borderColor: c.border, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 }}>
            <Text style={{ color: c.muted, fontSize: 9, fontWeight: '800', letterSpacing: 1.2 }}>LÉTIMAX / CONTROL</Text>
          </View>
        </View>
        <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 18 }}>{title}</Text>
        <Text style={{ color: c.muted, fontSize: 12, lineHeight: 19, marginTop: 6 }}>
          Área de gestão e acompanhamento. Consulte os dados, actualize o estado e reveja os resultados antes de tomar decisões.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 17, paddingTop: 13, borderTopWidth: 1, borderTopColor: c.border }}>
          <View>
            <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 1 }}>REGISTOS DISPONÍVEIS</Text>
            <Text style={{ color: c.gold, fontSize: 22, fontWeight: '800', marginTop: 3 }}>{count == null ? '—' : count}</Text>
          </View>
          <TouchableOpacity onPress={load} disabled={!endpoint || loading} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: c.gold, paddingHorizontal: 13, paddingVertical: 10, borderRadius: 10, opacity: !endpoint || loading ? 0.45 : 1 }}>
            <Ionicons name="refresh" size={15} color="#080808" />
            <Text style={{ color: '#080808', fontWeight: '800', fontSize: 11, marginLeft: 6 }}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {offline && <View style={{ ...panel, borderColor: c.warn }}><Text style={{ color: c.warn, fontSize: 12 }}>Modo offline — a mostrar os últimos dados guardados neste telemóvel.</Text></View>}
      {!!err && <View style={{ ...panel, borderColor: c.err }}><Text style={{ color: c.err, fontWeight: '700' }}>Não foi possível carregar</Text><Text style={{ color: c.muted, marginTop: 5, fontSize: 12 }}>{err}</Text><TouchableOpacity onPress={load} style={{ marginTop: 12, alignSelf: 'flex-start', backgroundColor: c.glow, padding: 9, borderRadius: 9 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Tentar novamente</Text></TouchableOpacity></View>}
      {loading && !data && <View style={{ ...panel, alignItems: 'center', padding: 24 }}><ActivityIndicator color={c.gold} /><Text style={{ color: c.muted, marginTop: 9, fontSize: 11 }}>A sincronizar com o servidor…</Text></View>}
      {!endpoint && <View style={panel}><Text style={{ color: c.gold, fontWeight: '700' }}>Módulo local</Text><Text style={{ color: c.muted, marginTop: 6, fontSize: 12 }}>Este módulo ainda não tem uma ligação de servidor configurada. As funções que dependem dessa ligação serão activadas na fase de integração.</Text></View>}
      {data != null && <View style={panel}><Text style={{ color: c.gold, fontWeight: '800', letterSpacing: 1, marginBottom: 10 }}>DADOS DO MÓDULO</Text><JsonView data={data} c={c} /></View>}
      {!loading && !err && endpoint && data == null && <View style={panel}><Text style={{ color: c.muted }}>Ainda não existem dados para apresentar.</Text></View>}
      <TouchableOpacity onPress={() => navigation.navigate('configuracoes')} style={{ padding: 13, borderWidth: 1, borderColor: c.border, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="settings-outline" color={c.gold} size={16} />
        <Text style={{ color: c.gold, marginLeft: 8, fontWeight: '700', fontSize: 12 }}>Configurar integrações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
