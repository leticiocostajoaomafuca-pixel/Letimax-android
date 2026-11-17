import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}
