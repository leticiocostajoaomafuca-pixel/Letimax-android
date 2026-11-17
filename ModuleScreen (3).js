import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
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
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}
