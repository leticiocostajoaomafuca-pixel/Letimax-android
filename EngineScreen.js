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

const PAINEIS_MODULOS = {
  raqueamento: { brand: 'LF / FALLBACK', eyebrow: 'CONTINGENCY CONTROL', description: 'Acompanhe fontes alternativas e estratégias de contingência, mantendo qualquer activação sob aprovação.', steps: [['01', 'FONTES', 'Verificar disponibilidade'], ['02', 'ESTRATÉGIAS', 'Avaliar alternativas'], ['03', 'ACTIVAÇÃO', 'Exigir aprovação manual']] },
  empresa: { brand: 'LF / COMPANY', eyebrow: 'BUSINESS MANAGEMENT', description: 'Acompanhe a evolução da empresa, os seus indicadores e o planeamento de crescimento.', steps: [['01', 'PROGRESSO', 'Consultar evolução'], ['02', 'PROJECÇÕES', 'Analisar cenários'], ['03', 'PLANO', 'Rever antes de aprovar']] },
  lanc: { brand: 'LF / LAUNCH', eyebrow: 'PRODUCT LAUNCH CONTROL', description: 'Organize a estratégia, os materiais e os resultados de cada lançamento.', steps: [['01', 'ESTRATÉGIA', 'Definir o plano'], ['02', 'PREPARAÇÃO', 'Criar materiais e emails'], ['03', 'RESULTADOS', 'Acompanhar desempenho']] },
  cursos: { brand: 'LF / ACADEMY', eyebrow: 'LEARNING CONTENT STUDIO', description: 'Estruture cursos, módulos e materiais de aprendizagem num fluxo organizado.', steps: [['01', 'CURSO', 'Definir tema e estrutura'], ['02', 'AULAS', 'Preparar guiões e módulos'], ['03', 'MATERIAIS', 'Criar slides e narração']] },
  sites: { brand: 'LF / WEB', eyebrow: 'WEBSITE MANAGEMENT', description: 'Planeie, reveja e acompanhe os sites ligados à plataforma.', steps: [['01', 'ESTRUTURA', 'Definir tipo de site'], ['02', 'CONTEÚDO', 'Preparar páginas'], ['03', 'PUBLICAÇÃO', 'Rever antes de publicar']] },
  apres: { brand: 'LF / DECK', eyebrow: 'PRESENTATION STUDIO', description: 'Prepare apresentações profissionais para propostas, relatórios, formação e projectos.', steps: [['01', 'OBJECTIVO', 'Escolher o formato'], ['02', 'CONTEÚDO', 'Organizar a narrativa'], ['03', 'REVISÃO', 'Validar antes de partilhar']] },
  automacao: { brand: 'LF / AUTO', eyebrow: 'AUTOMATION CONTROL', description: 'Inspeccione sugestões, pontuações e resultados das automações antes de autorizar mudanças.', steps: [['01', 'DETECTAR', 'Identificar tarefas'], ['02', 'AVALIAR', 'Verificar impacto e risco'], ['03', 'AUTORIZAR', 'Manter controlo humano']] },
  oportunidades: { brand: 'LF / RADAR', eyebrow: 'OPPORTUNITY INTELLIGENCE', description: 'Reveja oportunidades detectadas, consulte relatórios e decida quais podem avançar.', steps: [['01', 'DETECÇÃO', 'Reunir oportunidades'], ['02', 'RELATÓRIO', 'Analisar informação'], ['03', 'DECISÃO', 'Aprovar ou rejeitar']] },
  investimentos: { brand: 'LF / WATCH', eyebrow: 'MARKET MONITORING', description: 'Consulte informação de mercado e acompanhe activos sem executar operações financeiras.', steps: [['01', 'MONITORIZAR', 'Consultar preços'], ['02', 'ANALISAR', 'Acompanhar variações'], ['03', 'DECIDIR', 'Acções financeiras sempre manuais']] },
  logs: { brand: 'LF / TRACE', eyebrow: 'AUDIT & SECURITY', description: 'Consulte o histórico de tarefas, decisões e eventos de segurança da aplicação.', steps: [['01', 'ACTIVIDADE', 'Consultar tarefas'], ['02', 'AUDITORIA', 'Rever decisões'], ['03', 'SEGURANÇA', 'Verificar registos locais']] },
  actualizacao: { brand: 'LF / UPDATE', eyebrow: 'VERSION CONTROL', description: 'Verifique a versão disponível e escolha quando pretende instalar uma actualização.', steps: [['01', 'VERSÃO', 'Consultar versão actual'], ['02', 'VERIFICAÇÃO', 'Rever disponibilidade'], ['03', 'INSTALAÇÃO', 'Decidir quando actualizar']] },
  documentos: { brand: 'LF / VAULT', eyebrow: 'DOCUMENT MANAGEMENT', description: 'Organize contratos, documentos legais e registos de aceitação.', steps: [['01', 'CRIAR', 'Preparar documento'], ['02', 'REVER', 'Verificar conteúdo'], ['03', 'ARQUIVAR', 'Guardar e consultar']] },
};

export default function EngineScreen({ route, navigation }) {
  const { c } = useTheme();
  const cfg = SCREENS[route.params.id];
  const painelModulo = PAINEIS_MODULOS[route.params.id];
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
    const rows = list.map((it) => (typeof it === 'object' && it ? it : { valor: it }));
    const columns = rows.length ? primitives(rows[0]).map(([k]) => k).slice(0, 6) : [];
    return (
      <>
        {H(s.title)}
        {!list.length && <Text style={{ color: c.muted }}>Sem dados.</Text>}
        {!!rows.length && !!columns.length && (
          <ScrollView horizontal showsHorizontalScrollIndicator style={{ marginBottom: 10 }}>
            <View style={{ borderWidth: 1, borderColor: c.border, borderRadius: 10, overflow: 'hidden', backgroundColor: c.card }}>
              <View style={{ flexDirection: 'row', backgroundColor: c.bg }}>
                {columns.map((k) => <Text key={k} style={{ color: c.gold, fontSize: 11, fontWeight: '800', padding: 10, minWidth: 105, maxWidth: 180 }}>{pretty(k)}</Text>)}
              </View>
              {rows.map((row, i) => (
                <View key={row.id ?? i} style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: c.border }}>
                  {columns.map((k) => <Text key={k} numberOfLines={2} style={{ color: c.text, fontSize: 12, padding: 10, minWidth: 105, maxWidth: 180 }}>{fmt(row[k])}</Text>)}
                </View>
              ))}
            </View>
          </ScrollView>
        )}
        {rows.map((it, i) => <Item key={it.id ?? i} s={s} it={it} />)}
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
      {!['dashboard', 'mercado', 'marketing'].includes(route.params.id) && !painelModulo && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / {String(route.params.id || 'SYSTEM').toUpperCase()}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: loading ? c.warn : c.ok, marginRight: 6 }} />
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>{loading ? 'A ACTUALIZAR' : 'CENTRO DE CONTROLO'}</Text>
            </View>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>{cfg.titulo}</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>{cfg.note || 'Consulte indicadores, acompanhe registos e execute operações com controlo e aprovação.'}</Text>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 16, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {['ANÁLISE', 'DADOS', 'CONTROLO'].map((label, i) => (
              <View key={label} style={{ flex: 1, borderLeftWidth: i === 0 ? 0 : 1, borderLeftColor: c.border, paddingLeft: i === 0 ? 0 : 10 }}>
                <Text style={{ color: c.gold, fontSize: 9, fontWeight: '800', letterSpacing: 1 }}>{label}</Text>
                <Text style={{ color: c.muted, fontSize: 10, marginTop: 4 }}>{i === 0 ? 'Indicadores' : i === 1 ? 'Tabelas e gráficos' : 'Acções manuais'}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      {route.params.id === 'mercado' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.border }} />
          <View style={{ position: 'absolute', right: -12, top: -16, width: 106, height: 106, borderRadius: 53, borderWidth: 1, borderColor: c.gold, opacity: 0.35 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 11, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / INTEL</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold, marginRight: 6 }} />
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.5 }}>CENTRO DE MERCADO</Text>
            </View>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20, letterSpacing: 0.3 }}>Inteligência de mercado</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7, maxWidth: '92%' }}>Explore nichos, identifique oportunidades e acompanhe movimentos da concorrência.</Text>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 16, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: c.muted, fontSize: 9, letterSpacing: 1.5 }}>MÓDULO</Text>
              <Text style={{ color: c.text, fontSize: 12, fontWeight: '700', marginTop: 3 }}>ANÁLISE ESTRATÉGICA</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 9, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 10, fontWeight: '700', letterSpacing: 1 }}>LÉTIMAX AI</Text>
            </View>
          </View>
        </View>
      )}
      {route.params.id === 'marketing' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -32, top: -34, width: 148, height: 148, borderRadius: 74, borderWidth: 1, borderColor: c.gold, opacity: 0.25 }} />
          <View style={{ position: 'absolute', right: 8, top: 8, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / STUDIO</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.5 }}>CONTENT SYSTEM</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Estúdio de Marketing</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Crie conteúdos e campanhas para diferentes canais, com controlo sobre cada publicação.</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 16 }}>
            {['SOCIAL', 'VÍDEO', 'BLOG', 'EMAIL'].map((tag) => (
              <View key={tag} style={{ borderWidth: 1, borderColor: c.border, borderRadius: 7, paddingHorizontal: 9, paddingVertical: 6, marginRight: 6, marginBottom: 6, backgroundColor: c.bg }}>
                <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>{tag}</Text>
              </View>
            ))}
          </View>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 8, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.text, fontSize: 11, fontWeight: '600', flex: 1 }}>Aprovação manual antes de publicar</Text>
          </View>
        </View>
      )}
      {route.params.id === 'novonegocio' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -30, top: -42, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.25 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 78, height: 78, borderRadius: 39, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / VENTURES</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.4 }}>OPPORTUNITY LAB</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Novos Negócios</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Descubra oportunidades, avalie o potencial e decida quais projectos merecem avançar.</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11, marginRight: 8 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>01 / DETECTAR</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Encontrar ideias</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>02 / AVALIAR</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Analisar potencial</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 14, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.text, fontSize: 11, fontWeight: '600', flex: 1 }}>Implementação sujeita à sua aprovação</Text>
          </View>
        </View>
      )}
      {route.params.id === 'activos' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -36, top: -38, width: 154, height: 154, borderRadius: 77, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 10, top: 10, width: 86, height: 86, borderRadius: 43, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / ASSETS</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.4 }}>ASSET CONTROL</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Activos</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Acompanhe os activos digitais e projectos em desenvolvimento num único painel.</Text>
          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11, marginRight: 8 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>01 / VALOR</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Visão consolidada</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>02 / PROGRESSO</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Em construção</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 14, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.text, fontSize: 11, fontWeight: '600', flex: 1 }}>Gestão e acompanhamento de activos</Text>
          </View>
        </View>
      )}
      {(route.params.id === 'afext' || route.params.id === 'afprop') && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.24 }} />
          <View style={{ position: 'absolute', right: 8, top: 8, width: 84, height: 84, borderRadius: 42, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / PARTNERS</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.4 }}>AFFILIATE NETWORK</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>{route.params.id === 'afext' ? 'Afiliados Externos' : 'Afiliados Próprios'}</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Acompanhe parcerias, campanhas, desempenho e comissões através do centro de afiliados.</Text>
          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11, marginRight: 8 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>01 / PARCERIAS</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Produtos e campanhas</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: c.bg, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 11 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1 }}>02 / RESULTADOS</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 5 }}>Receita e comissões</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: c.border, marginTop: 14, marginBottom: 12 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.text, fontSize: 11, fontWeight: '600', flex: 1 }}>Campanhas e comissões sob o seu controlo</Text>
          </View>
        </View>
      )}
      {route.params.id === 'lanc' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -30, top: -36, width: 145, height: 145, borderRadius: 73, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 14, top: 14, width: 78, height: 78, borderRadius: 39, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / LAUNCH</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.3 }}>PRODUCT INTELLIGENCE</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Lançamentos</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Organize o ciclo de lançamento, acompanhe cada fase e prepare campanhas antes de publicar.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'PREPARAÇÃO', 'Definir produto, público e oferta'],
              ['02', 'PLANEAMENTO', 'Estruturar conteúdos e calendário'],
              ['03', 'PUBLICAÇÃO', 'Rever e aprovar antes de lançar'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>As publicações e operações importantes continuam sujeitas à sua aprovação.</Text>
        </View>
      )}
      {route.params.id === 'webinars' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -32, top: -38, width: 148, height: 148, borderRadius: 74, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / LIVE</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.3 }}>LIVE EXPERIENCE</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Webinars</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Planeie sessões ao vivo, organize participantes e acompanhe os resultados de cada evento.</Text>
          <View style={{ flexDirection: 'row', marginTop: 17 }}>
            <View style={{ flex: 1, backgroundColor: c.bg, borderWidth: 1, borderColor: c.border, borderRadius: 12, padding: 12, marginRight: 8 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '800', letterSpacing: 1 }}>01 / EVENTO</Text>
              <Text style={{ color: c.text, fontSize: 12, fontWeight: '700', marginTop: 7 }}>Agenda</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 3 }}>Tema e horário</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: c.bg, borderWidth: 1, borderColor: c.border, borderRadius: 12, padding: 12 }}>
              <Text style={{ color: c.gold, fontSize: 9, fontWeight: '800', letterSpacing: 1 }}>02 / PÚBLICO</Text>
              <Text style={{ color: c.text, fontSize: 12, fontWeight: '700', marginTop: 7 }}>Participantes</Text>
              <Text style={{ color: c.muted, fontSize: 10, marginTop: 3 }}>Inscrições e presença</Text>
            </View>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: c.border, marginTop: 15, paddingTop: 12, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.text, fontSize: 11, fontWeight: '600', flex: 1 }}>Reveja os detalhes antes de publicar ou iniciar um evento</Text>
          </View>
        </View>
      )}
      {route.params.id === 'email' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / MAIL</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>COMMUNICATION HUB</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Email Marketing</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Prepare comunicações, organize contactos e acompanhe campanhas de email com controlo antes do envio.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'CONTACTOS', 'Organização de listas e segmentos'],
              ['02', 'CAMPANHAS', 'Assunto, conteúdo e agendamento'],
              ['03', 'ANÁLISE', 'Entregas, aberturas e cliques'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>O envio de campanhas exige revisão e aprovação manual.</Text>
        </View>
      )}
      {route.params.id === 'analytics' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / DATA</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>PERFORMANCE INTELLIGENCE</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Analytics</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Transforme os dados disponíveis em indicadores claros para acompanhar o desempenho do negócio.</Text>
          <View style={{ flexDirection: 'row', marginTop: 17 }}>
            {[
              ['01', 'TRÁFEGO', 'Visitas e origem'],
              ['02', 'CONVERSÃO', 'Resultados e taxas'],
              ['03', 'RECEITA', 'Vendas e evolução'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flex: 1, backgroundColor: c.bg, borderWidth: 1, borderColor: c.border, borderRadius: 10, padding: 9, marginRight: index === 2 ? 0 : 7 }}>
                <Text style={{ color: c.gold, fontSize: 9, fontWeight: '800' }}>{item[0]}</Text>
                <Text style={{ color: c.text, fontSize: 10, fontWeight: '800', marginTop: 8 }}>{item[1]}</Text>
                <Text style={{ color: c.muted, fontSize: 9, marginTop: 4 }}>{item[2]}</Text>
              </View>
            ))}
          </View>
          <View style={{ borderTopWidth: 1, borderColor: c.border, marginTop: 15, paddingTop: 12, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.gold, marginRight: 8 }} />
            <Text style={{ color: c.muted, fontSize: 10, flex: 1 }}>Os indicadores dependem dos dados realmente recebidos pelas integrações.</Text>
          </View>
        </View>
      )}
      {route.params.id === 'reputacao' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / TRUST</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>BRAND MONITORING</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Reputação</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Acompanhe a percepção da marca, organize avaliações e prepare respostas consistentes aos clientes.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'AVALIAÇÕES', 'Reunir opiniões e classificações'],
              ['02', 'ACOMPANHAMENTO', 'Identificar tendências e questões recorrentes'],
              ['03', 'RESPOSTAS', 'Preparar respostas para revisão'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>Avaliações e métricas só serão apresentadas quando existirem dados de origem disponíveis.</Text>
        </View>
      )}
      {route.params.id === 'suporte' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / CARE</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>SUPPORT CENTER</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Suporte</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Centralize pedidos de ajuda, acompanhe problemas e mantenha o histórico de atendimento organizado.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'NOVO PEDIDO', 'Registar a questão e os detalhes'],
              ['02', 'ACOMPANHAMENTO', 'Consultar o estado do atendimento'],
              ['03', 'RESOLUÇÃO', 'Registar a solução e encerrar o pedido'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>Os pedidos e respectivos estados dependem dos dados e serviços de suporte ligados à aplicação.</Text>
        </View>
      )}
      {route.params.id === 'onboarding' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / START</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>WELCOME SEQUENCE</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Configuração Inicial</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Prepare a LétimaX para o seu fluxo de trabalho, definindo preferências e revendo as integrações disponíveis.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'PERFIL', 'Configurar dados e preferências'],
              ['02', 'PLATAFORMAS', 'Escolher serviços a ligar'],
              ['03', 'AUTORIZAÇÕES', 'Rever permissões e acessos'],
              ['04', 'PRONTO A USAR', 'Confirmar a configuração'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>As ligações externas só ficam activas depois de configurar e autorizar cada serviço.</Text>
        </View>
      )}
      {route.params.id === 'referencias' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / SOURCE</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>KNOWLEDGE LIBRARY</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Centro de Referências</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Organize fontes, documentos e ligações úteis para apoiar pesquisas, decisões e projectos.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'FONTES', 'Registar a origem da informação'],
              ['02', 'DOCUMENTOS', 'Associar ficheiros e materiais'],
              ['03', 'CONSULTA', 'Localizar referências por tema'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>As referências apresentadas devem manter a fonte original para verificação.</Text>
        </View>
      )}
      {route.params.id === 'paginas' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / PAGES</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>PAGE EXPERIENCE STUDIO</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Estúdio de Páginas</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Estruture páginas para apresentar produtos, captar contactos e comunicar ofertas com clareza.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'ESTRUTURA', 'Definir secções e hierarquia visual'],
              ['02', 'CONTEÚDO', 'Preparar textos, imagens e chamadas'],
              ['03', 'REVISÃO', 'Verificar apresentação antes de publicar'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>A publicação deve ocorrer apenas depois da sua revisão e aprovação.</Text>
        </View>
      )}
      {route.params.id === 'videos' && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>LF / MOTION</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.2 }}>VIDEO CREATION STUDIO</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>Estúdio de Vídeos</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>Planeie conteúdos audiovisuais, organize guiões e prepare vídeos para diferentes plataformas.</Text>
          <View style={{ marginTop: 17 }}>
            {[
              ['01', 'GUIÃO', 'Definir mensagem e sequência'],
              ['02', 'PRODUÇÃO', 'Preparar cenas, voz e elementos visuais'],
              ['03', 'EXPORTAÇÃO', 'Rever formato e qualidade final'],
            ].map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>A geração e exportação dependem das ferramentas e integrações configuradas.</Text>
        </View>
      )}
      {painelModulo && (
        <View style={{ backgroundColor: c.card, borderRadius: 20, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -34, top: -38, width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: c.gold, opacity: 0.22 }} />
          <View style={{ position: 'absolute', right: 12, top: 12, width: 82, height: 82, borderRadius: 41, borderWidth: 1, borderColor: c.border }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ borderWidth: 1, borderColor: c.gold, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7 }}>
              <Text style={{ color: c.gold, fontSize: 11, fontWeight: '800', letterSpacing: 2 }}>{painelModulo.brand}</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 9, fontWeight: '700', letterSpacing: 1.1 }}>{painelModulo.eyebrow}</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 24, fontWeight: '800', marginTop: 20 }}>{cfg.titulo}</Text>
          <Text style={{ color: c.muted, fontSize: 13, lineHeight: 19, marginTop: 7 }}>{painelModulo.description}</Text>
          <View style={{ marginTop: 17 }}>
            {painelModulo.steps.map((item, index) => (
              <View key={item[0]} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderTopWidth: index === 0 ? 1 : 0, borderBottomWidth: 1, borderColor: c.border }}>
                <Text style={{ color: c.gold, fontSize: 15, fontWeight: '800', width: 38 }}>{item[0]}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: c.text, fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>{item[1]}</Text>
                  <Text style={{ color: c.muted, fontSize: 11, marginTop: 4 }}>{item[2]}</Text>
                </View>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.gold }} />
              </View>
            ))}
          </View>
          <Text style={{ color: c.muted, fontSize: 10, marginTop: 13 }}>Os dados e operações deste módulo continuam ligados às secções e acções configuradas abaixo.</Text>
        </View>
      )}
      {route.params.id === 'dashboard' && (
        <View style={{ backgroundColor: c.card, borderRadius: 18, borderWidth: 1, borderColor: c.gold, padding: 18, marginBottom: 18 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <View style={{ width: 42, height: 42, borderRadius: 12, borderWidth: 1, borderColor: c.gold, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: c.gold, fontSize: 17, fontWeight: '800', letterSpacing: 1 }}>LF</Text>
            </View>
            <Text style={{ color: c.gold, fontSize: 10, fontWeight: '700', letterSpacing: 2 }}>PAINEL DE CONTROLO</Text>
          </View>
          <Text style={{ color: c.text, fontSize: 23, fontWeight: '700' }}>Bem-vindo à LétimaX</Text>
          <Text style={{ color: c.muted, fontSize: 13, marginTop: 6 }}>Acompanhe o estado das suas tarefas, oportunidades e integrações num só lugar.</Text>
          <View style={{ height: 1, backgroundColor: c.border, marginVertical: 14 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: c.muted, fontSize: 10, letterSpacing: 1 }}>DATA</Text>
              <Text style={{ color: c.text, fontSize: 13, fontWeight: '600', marginTop: 3 }}>{new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</Text>
            </View>
            <TouchableOpacity onPress={load} disabled={loading} style={{ backgroundColor: c.gold, paddingVertical: 9, paddingHorizontal: 13, borderRadius: 10, opacity: loading ? 0.6 : 1 }}>
              <Text style={{ color: '#000', fontWeight: '700', fontSize: 12 }}>{loading ? 'A actualizar…' : 'Actualizar painel'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
