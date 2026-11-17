import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, RefreshControl, Linking, Share, ActivityIndicator } from 'react-native';
import notifee, { AndroidImportance, TriggerType } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api, isRede } from '../services/api';
import { falarVoz } from '../services/voz';
import { enfileirar } from '../services/queue';
import { cacheGet, cacheSet, espelhar, localList, guardarLocal, registarDecisao } from '../db/database';
import { MAPA } from '../db/schema';
import JsonView from '../components/JsonView';
import Bars, { autoItems } from '../components/Bars';
import { SCREENS } from './screens.config';
import { pretty, fmt, asList, primitives, pick, fill, fillBody, csv } from '../components/ui';

const TITULOS = ['titulo', 'nome', 'name', 'assunto', 'email', 'plataforma', 'tipo', 'acao', 'id'];
const ESTADOS = ['estado', 'status'];
const LINKS = ['url', 'pdf_url', 'link', 'download_url'];
const TEXTOS = ['texto', 'contrato', 'conteudo', 'script', 'resumo', 'resposta'];

function Contagem({ d, c }) {
  const [, tick] = useState(0);
  useEffect(() => { const t = setInterval(() => tick((x) => x + 1), 30000); return () => clearInterval(t); }, []);
  const k = Object.keys(d || {}).find((x) => /(fim|encerra|abertura|data_lancamento|termina)/i.test(x) && !isNaN(Date.parse(d[x])));
  if (!k) return null;
  const ms = Date.parse(d[k]) - Date.now();
  if (ms <= 0) return <Text style={{ color: c.warn, fontWeight: '700', marginBottom: 8 }}>Encerrado</Text>;
  const dias = Math.floor(ms / 86400000), h = Math.floor((ms % 86400000) / 3600000), m = Math.floor((ms % 3600000) / 60000);
  return <Text style={{ color: c.gold, fontSize: 22, fontWeight: '800', marginBottom: 10 }}>⏳ {dias}d {h}h {m}min</Text>;
}

export default function EngineScreen({ route, navigation }) {
  const { c } = useTheme();
  const cfg = SCREENS[route.params.id];
  const [data, setData] = useState({});
  const [offline, setOffline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(null); // { action, item, values }
  const [result, setResult] = useState(null);

  const sections = cfg.sections || [];
  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    const out = {}; let off = false;
    await Promise.all(sections.map(async (s) => {
      if (s.kind === 'local') { out[s.key] = await localList(s.tabela); return; }
      try {
        const d = await api.get(s.endpoint);
        out[s.key] = d; cacheSet(s.endpoint, d);
        const t = MAPA[s.endpoint];
        if (t) espelhar(t, asList(d)).catch(() => {});
      } catch (e) {
        const k = await cacheGet(s.endpoint);
        if (k) { out[s.key] = k.dados; off = true; } else out[s.key] = { __erro: e.message };
      }
    }));
    setData(out); setOffline(off); setLoading(false);
  }, [route.params.id]);
  useEffect(() => { load(); }, [load]);

  const exec = async (a, item, values) => {
    const vars = { ...(item || {}), ...(values || {}) };
    setBusy(true); setMsg('');
    let ep = null, body = null;
    try {
      if (a.method === 'NAV') { navigation.navigate(a.endpoint); return; }
      if (a.method === 'OPEN') {
        const u = pick(await api.get(a.from), LINKS);
        if (!u) { setMsg('O servidor não indicou nenhum endereço de descarga.'); return; }
        await Linking.openURL(String(u)); return;
      }
      if (a.method === 'LATER') {
        const channelId = await notifee.createChannel({ id: 'lembretes', name: 'Lembretes', importance: AndroidImportance.DEFAULT });
        await notifee.requestPermission();
        await notifee.createTriggerNotification(
          { title: 'LétimaX', body: 'Há uma actualização disponível. Quando quiser, instale-a nas Configurações.', android: { channelId, pressAction: { id: 'default' } } },
          { type: TriggerType.TIMESTAMP, timestamp: Date.now() + 24 * 3600 * 1000 });
        setMsg('Combinado: volto a avisar amanhã.'); return;
      }
      ep = fill(a.endpoint, vars, true);
      let r;
      if (a.method === 'GET') r = await api.get(ep, 60000);
      else { body = fillBody(a.body || values || {}, vars); r = await api.post(ep, body, 60000); }
      const texto = typeof r === 'string' ? r : r && typeof r === 'object' ? pick(r, TEXTOS) : undefined;
      if (a.speak) falarVoz(String(texto || JSON.stringify(r)));
      if (a.guardarEm) await guardarLocal(a.guardarEm, { acao: a.label, ...(values || {}), resultado: String(texto || JSON.stringify(r)).slice(0, 500) });
      if (a.method !== 'GET' && (a.confirm || /aprov|activ|public|reembols/i.test(a.label))) registarDecisao(a.label, JSON.stringify(vars).slice(0, 300)).catch(() => {});
      setResult({ titulo: a.label, data: r });
      setMsg('Feito: ' + a.label);
      if (a.method !== 'GET') load();
    } catch (e) {
      if (a.method === 'POST' && ep && !a.danger && isRede(e)) {
        await enfileirar('POST', ep, body || {}, a.label);
        setMsg('Sem ligação. Guardado na fila: segue quando a internet voltar (até 24 h).');
      } else setMsg(e.message);
    } finally { setBusy(false); setForm(null); }
  };

  const run = (a, item) => {
    if (a.confirm && !a.form) Alert.alert(a.label, a.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(a, item, null) }]);
    else if (a.form) setForm({ action: a, item, values: {} });
    else exec(a, item, null);
  };
  const submit = () => {
    const { action, item, values } = form;
    if (action.confirm) Alert.alert(action.label, action.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(action, item, values) }]);
    else exec(action, item, values);
  };

  const btn = (danger) => ({ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.card, borderWidth: 1, borderColor: danger ? c.err : c.border, marginRight: 6, marginBottom: 6 });
  const H = (t) => <Text style={{ color: c.gold, fontWeight: '700', fontSize: 15, marginTop: 20, marginBottom: 8 }}>{t}</Text>;

  const Stats = ({ d }) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {primitives(d).filter(([k]) => k !== '__erro').map(([k, v]) => (
        <View key={k} style={{ width: '48%', marginRight: '2%', marginBottom: 8, backgroundColor: c.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.muted, fontSize: 11 }}>{pretty(k)}</Text>
          <Text style={{ color: c.text, fontSize: 18, fontWeight: '700', marginTop: 2 }}>{fmt(v)}</Text>
        </View>
      ))}
    </View>
  );

  const Item = ({ s, it }) => {
    const tKey = (s.itemTitle || TITULOS).find((k) => it[k] != null && it[k] !== '');
    const est = pick(it, ESTADOS);
    const warn = s.warnIf && s.warnIf(it);
    const tend = typeof it.tendencia === 'string' ? (/sub|cresc|up|alta/i.test(it.tendencia) ? '▲ ' : /desc|baix|down|queda/i.test(it.tendencia) ? '▼ ' : '► ') : '';
    const meta = primitives(it).filter(([k]) => k !== tKey && !ESTADOS.includes(k) && k !== 'id').slice(0, 6);
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: warn ? c.warn : c.border }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, fontWeight: '700', fontSize: 15, flex: 1 }}>{tKey ? fmt(it[tKey]) : 'Item'}</Text>
          {est != null && <Text style={{ color: c.gold, fontWeight: '700' }}>{fmt(est)}</Text>}
        </View>
        {warn && <Text style={{ color: c.warn, marginTop: 4 }}>Sem resposta há mais de 24 horas.</Text>}
        {meta.map(([k, v]) => <Text key={k} style={{ color: c.muted, marginTop: 2 }}>{k === 'tendencia' ? tend : ''}{pretty(k)}: {fmt(v)}</Text>)}
        {!!(s.itemActions || []).length && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {s.itemActions.filter((a) => !a.if || a.if(it)).map((a) => (
              <TouchableOpacity key={a.label} style={btn(a.danger)} onPress={() => run(a, it)}><Text style={{ color: a.danger ? c.err : c.gold }}>{a.label}</Text></TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  const Section = ({ s }) => {
    const d = data[s.key];
    if (d === undefined) return null;
    if (d && d.__erro) return <>{H(s.title)}<Text style={{ color: c.err }}>{d.__erro}</Text></>;
    if (s.kind === 'stats') return <>{H(s.title)}<Stats d={d} /></>;
    if (s.kind === 'json') return <>{H(s.title)}{s.countdown && <Contagem d={d} c={c} />}<JsonView data={d} c={c} /></>;
    if (s.kind === 'bars') {
      const items = autoItems(d);
      return <>{H(s.title)}{items.length ? <Bars items={items} c={c} /> : <JsonView data={d} c={c} />}</>;
    }
    const list = asList(d).slice(0, s.limit || 200);
    return (
      <>
        {H(s.title)}
        {!list.length && <Text style={{ color: c.muted }}>Sem dados.</Text>}
        {list.map((it, i) => <Item key={it.id ?? i} s={s} it={typeof it === 'object' && it ? it : { valor: it }} />)}
        {s.export && !!list.length && (
          <TouchableOpacity style={btn()} onPress={() => Share.share({ message: csv(list) })}><Text style={{ color: c.gold }}>Exportar CSV</Text></TouchableOpacity>
        )}
      </>
    );
  };

  const Resultado = () => {
    if (!result) return null;
    const d = result.data;
    const link = d && typeof d === 'object' ? pick(d, LINKS) : undefined;
    const texto = typeof d === 'string' ? d : d && typeof d === 'object' ? pick(d, TEXTOS) : undefined;
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 16, borderWidth: 1, borderColor: c.gold }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.gold, fontWeight: '700' }}>{result.titulo}</Text>
          <TouchableOpacity onPress={() => setResult(null)}><Text style={{ color: c.muted }}>Fechar</Text></TouchableOpacity>
        </View>
        <View style={{ marginTop: 8 }}>
          {texto ? <Text selectable style={{ color: c.text }}>{String(texto)}</Text> : <JsonView data={d} c={c} />}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' }}>
          {link && <TouchableOpacity style={btn()} onPress={() => Linking.openURL(String(link))}><Text style={{ color: c.gold }}>Abrir / descarregar</Text></TouchableOpacity>}
          {texto && <TouchableOpacity style={btn()} onPress={() => Share.share({ message: String(texto) })}><Text style={{ color: c.gold }}>Partilhar</Text></TouchableOpacity>}
        </View>
      </View>
    );
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const Form = () => !form ? null : (
    <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 14, borderWidth: 1, borderColor: c.gold }}>
      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>{form.action.label}</Text>
      {form.action.form.map((f) => f.type === 'options' ? (
        <View key={f.name} style={{ marginBottom: 8 }}>
          <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>{f.label}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {f.options.map((o) => {
              const on = form.values[f.name] === o;
              return <TouchableOpacity key={o} onPress={() => setForm({ ...form, values: { ...form.values, [f.name]: o } })} style={{ ...btn(), backgroundColor: on ? c.gold : c.bg }}><Text style={{ color: on ? '#000' : c.text }}>{o}</Text></TouchableOpacity>;
            })}
          </View>
        </View>
      ) : (
        <TextInput key={f.name} value={form.values[f.name] || ''} placeholder={f.label} placeholderTextColor={c.muted} multiline={!!f.multiline} keyboardType={f.number ? 'numeric' : 'default'} autoCapitalize="none"
          onChangeText={(t) => setForm({ ...form, values: { ...form.values, [f.name]: f.number ? t.replace(',', '.') : t } })} style={{ ...input, minHeight: f.multiline ? 70 : undefined }} />
      ))}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={submit} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled"
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>{cfg.titulo}</Text>
      {!!cfg.note && <Text style={{ color: c.muted, marginTop: 6 }}>{cfg.note}</Text>}
      {offline && <Text style={{ color: c.warn, marginTop: 6 }}>Modo offline: dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginTop: 8 }}>{msg}</Text>}
      {busy && <ActivityIndicator color={c.gold} style={{ marginTop: 8 }} />}
      {!!(cfg.actions || []).length && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 14 }}>
          {cfg.actions.map((a) => <TouchableOpacity key={a.label} style={btn()} onPress={() => run(a, null)}><Text style={{ color: c.gold, fontWeight: '600' }}>{a.label}</Text></TouchableOpacity>)}
        </View>
      )}
      {Form()}
      {Resultado()}
      {sections.map((s) => <Section key={s.key} s={s} />)}
    </ScrollView>
  );
}
