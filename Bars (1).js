import React from 'react';
import { View, Text } from 'react-native';
import { pick, pretty, fmt } from './ui';

const LABELS = ['label', 'nome', 'canal', 'origem', 'hora', 'dia', 'nicho', 'titulo', 'plataforma'];
const VALUES = ['valor', 'total', 'receita', 'vendas', 'conversao', 'roi', 'pontuacao', 'percentagem'];

// Converte respostas do servidor em barras: objecto {rótulo: número} ou lista de itens com rótulo e valor
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
    <View>
      {items.map((i, n) => (
        <View key={n} style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.muted, fontSize: 12 }}>{i.label}</Text>
            <Text style={{ color: c.text, fontSize: 12, fontWeight: '700' }}>{fmt(i.value)}</Text>
          </View>
          <View style={{ height: 8, backgroundColor: c.border, borderRadius: 4, marginTop: 3 }}>
            <View style={{ height: 8, width: Math.max((Math.abs(i.value) / max) * 100, 2) + '%', backgroundColor: i.color || c.gold, borderRadius: 4 }} />
          </View>
        </View>
      ))}
    </View>
  );
}
