export const pretty = (k) => String(k).replace(/_/g, ' ').replace(/^./, (s) => s.toUpperCase());
export const fmt = (v) => {
  if (v === null || v === undefined || v === '') return '—';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : v.toFixed(2);
  if (typeof v === 'boolean') return v ? 'Sim' : 'Não';
  return String(v);
};
// Lista a partir de qualquer resposta: array directo ou a primeira propriedade que seja array
export const asList = (d) => {
  if (Array.isArray(d)) return d;
  if (d && typeof d === 'object') {
    const k = Object.keys(d).find((x) => Array.isArray(d[x]));
    if (k) return d[k];
  }
  return [];
};
export const primitives = (o) => Object.entries(o || {}).filter(([, v]) => v === null || typeof v !== 'object');
export const pick = (o, keys) => {
  for (const k of keys) if (o && o[k] !== undefined && o[k] !== null && o[k] !== '') return o[k];
  return undefined;
};
export const fill = (s, vars, enc) =>
  String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? '' : enc ? encodeURIComponent(vars[k]) : String(vars[k])));
export const fillBody = (b, vars) => {
  if (b == null) return undefined;
  const out = {};
  Object.entries(b).forEach(([k, v]) => { out[k] = typeof v === 'string' ? fill(v, vars, false) : v; });
  return out;
};
export const csv = (rows) => {
  if (!rows.length) return '';
  const cols = Array.from(new Set(rows.flatMap((r) => primitives(r).map(([k]) => k))));
  const esc = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  return [cols.join(',')].concat(rows.map((r) => cols.map((c) => esc(r[c])).join(','))).join('\n');
};
