import React from 'react';
import { View, Text } from 'react-native';
import { pick, pretty, fmt } from './ui';

const LABELS = ['label', 'nome', 'canal', 'origem', 'hora', 'dia', 'nicho', 'titulo', 'plataforma'];
const VALUES = ['valor', 'total', 'receita', 'vendas', 'conversao', 'roi', 'pontuacao', 'percentagem'];

export function autoItems(d) {
  if (Array.isArray(d)) {
    return d.map((it, i) => {
      if (typeof it === 'number') return { label: String(i + 1), value: it };
      const label = pick(it, LABELS);
      const k = VALUES.find((x) => typeof (it || {})[x] === 'number');
      return label != null && k ? { label: String(label), value: it[k] } : null;
    }).filter(Boolean);
  }
  if (d && typeof d === 'object') return Object.entries(d).filter(([, v]) => typeof v === 'number').map(([k, v]) => ({ label: pretty(k), value: v }));
  return [];
}

export default function Bars({ items, c }) {
  const max = Math.max(...items.map((i) => Math.abs(i.value)), 1);
  return (
    <View style={{ backgroundColor: c.card, borderWidth: 1, borderColor: c.border, borderRadius: 16, padding: 14 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.accent, marginRight: 8 }} />
        <Text style={{ color: c.muted, fontSize: 10, letterSpacing: 2, fontWeight: '700' }}>ANÁLISE DE DESEMPENHO</Text>
      </View>
      {items.map((i, n) => (
        <View key={n} style={{ marginBottom: n === items.length - 1 ? 0 : 13 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: c.muted, fontSize: 12 }}>{i.label}</Text>
            <Text style={{ color: c.gold, fontSize: 12, fontWeight: '800', fontVariant: ['tabular-nums'] }}>{fmt(i.value)}</Text>
          </View>
          <View style={{ height: 7, backgroundColor: c.border, borderRadius: 5, marginTop: 6, overflow: 'hidden' }}>
            <View style={{ height: 7, width: Math.max((Math.abs(i.value) / max) * 100, 2) + '%', backgroundColor: n % 2 ? c.accent : c.gold, borderRadius: 5 }} />
          </View>
        </View>
      ))}
    </View>
  );
}
