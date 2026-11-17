import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig } from '../db/database';
import { processarFila, contarFila } from '../services/queue';
import { pick, fmt } from './ui';

// Indicadores no topo: nível de autonomia, estado do servidor, nicho, receita do dia e progresso da meta.
export default function TopIndicators() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [ok, setOk] = useState(null);
  const [nivel, setNivel] = useState('1');
  const [fila, setFila] = useState(0);

  useEffect(() => {
    let vivo = true;
    const tick = async () => {
      try { const r = await api.get('/dashboard', 8000); if (vivo) { setD(r); setOk(true); } await processarFila(); } catch (e) { if (vivo) setOk(false); }
      contarFila().then((n) => vivo && setFila(n)).catch(() => {});
      getConfig('autonomia').then((v) => vivo && v && setNivel(v));
    };
    tick();
    const t = setInterval(tick, 60000);
    return () => { vivo = false; clearInterval(t); };
  }, []);

  const receita = d && pick(d, ['receita_dia', 'receita_hoje', 'receita_do_dia']);
  const meta = d && pick(d, ['meta_pct', 'meta_percentagem', 'progresso_meta']);
  const nicho = d && pick(d, ['nicho', 'nicho_actual', 'nicho_atual']);
  const chip = { color: c.muted, fontSize: 11, marginLeft: 8 };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12, maxWidth: 220 }}>
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: ok == null ? c.muted : ok ? c.ok : c.err }} />
      <Text style={{ ...chip, color: c.gold, fontWeight: '700' }}>N{nivel}</Text>
      {fila > 0 && <Text style={{ ...chip, color: c.warn }}>⏳{fila}</Text>}
      {receita != null && <Text style={chip}>R${fmt(receita)}</Text>}
      {meta != null && <Text style={chip}>{fmt(meta)}%</Text>}
      {nicho != null && <Text numberOfLines={1} style={{ ...chip, flexShrink: 1 }}>{String(nicho)}</Text>}
    </View>
  );
}
