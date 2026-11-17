import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig, setConfig } from '../db/database';
import { getPass, setPass, fazerBackup, partilhar, restaurar, escolherPasta } from '../services/backup';
import { biometricAuth } from '../services/security';
import { asList } from '../components/ui';

export default function SettingsMais({ flash }) {
  const { c } = useTheme();
  const [ultimo, setUltimo] = useState('');
  const [temPass, setTemPass] = useState(false);
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [pRest, setPRest] = useState('');
  const [busy, setBusy] = useState(false);
  const [v, setV] = useState({ voz_modo: 'servidor', cmd_activacao: '', cmd_activacao_on: '1', max_tentativas: '', bloqueio_min: '', duracao_autonomo: '' });
  const [chaves, setChaves] = useState(null);

  const carregarChaves = useCallback(() => {
    api.get('/chaves/lista', 8000).then((d) => setChaves(asList(d).map((x) => (typeof x === 'string' ? x : x.nome || x.name || JSON.stringify(x))))).catch(() => setChaves(null));
  }, []);
  useEffect(() => {
    (async () => {
      setUltimo((await getConfig('ultimo_backup')) || '');
      setTemPass(!!(await getPass()));
      const o = {};
      for (const k of Object.keys(v)) { const x = await getConfig(k); if (x != null) o[k] = x; }
      setV((a) => ({ ...a, ...o }));
    })();
    carregarChaves();
  }, []);

  const guardar = async (ks, msg) => { for (const k of ks) await setConfig(k, v[k] || ''); flash(msg || 'Guardado.'); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const H = (t) => <Text style={{ color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>{t}</Text>;
  const Btn = ({ t, f, sec }) => <TouchableOpacity disabled={busy} onPress={f} style={{ backgroundColor: sec ? c.card : c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 6, opacity: busy ? 0.5 : 1 }}><Text style={{ color: sec ? c.gold : '#000', fontWeight: '700' }}>{t}</Text></TouchableOpacity>;
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });
  const F = (k, label, ph, num) => (
    <View key={k}>
      <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{label}</Text>
      <TextInput style={input} value={v[k] || ''} onChangeText={(t) => setV((a) => ({ ...a, [k]: t }))} placeholder={ph} placeholderTextColor={c.muted} keyboardType={num ? 'numeric' : 'default'} autoCapitalize="none" />
    </View>
  );

  const correr = async (fn) => { setBusy(true); try { await fn(); } catch (e) { flash(e.message); } setBusy(false); };

  const definirPass = () => {
    if (p1.length < 12) return flash('Use pelo menos 12 caracteres. Sem esta palavra-passe não consegue restaurar o backup.');
    if (p1 !== p2) return flash('As palavras-passe não coincidem.');
    correr(async () => { await setPass(p1); setP1(''); setP2(''); setTemPass(true); flash('Palavra-passe do backup guardada neste telemóvel.'); });
  };
  const agora = () => correr(async () => {
    const r = await fazerBackup(); setUltimo(new Date().toISOString());
    flash('Backup feito (' + r.destino + ').');
  });
  const enviar = () => correr(async () => { await partilhar(); setUltimo(new Date().toISOString()); });
  const pasta = () => correr(async () => { const u = await escolherPasta(); flash(u ? 'Pasta escolhida. O backup diário passa a ir para lá.' : 'Nenhuma pasta escolhida.'); });
  const restaurarAgora = () => Alert.alert('Restaurar backup', 'Isto SUBSTITUI os dados locais por os do ficheiro. Confirma?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Restaurar', style: 'destructive', onPress: () => correr(async () => {
      if (!(await biometricAuth())) return flash('Confirme a identidade para restaurar.');
      const n = await restaurar(pRest || undefined);
      if (n == null) return flash('Nenhum ficheiro escolhido.');
      setPRest(''); flash(n + ' registos restaurados. Feche e abra a APP; terá de indicar de novo o servidor e o token.');
    }) },
  ]);
  const apagarChave = (nome) => Alert.alert('Eliminar chave', nome + ' será removida do servidor.', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { try { await api.del('/chaves/remover', { nome }); flash(nome + ' removida.'); carregarChaves(); } catch (e) { flash(e.message); } } },
  ]);

  return (
    <View>
      {H('Backup (.letimax)')}
      <Text style={{ color: c.muted, marginBottom: 8 }}>Último backup: {ultimo ? ultimo.slice(0, 16).replace('T', ' ') : 'nunca'}. O ficheiro é cifrado (AES-256 + HMAC). Não inclui o PIN, o cofre de passwords, o token do servidor nem as chaves de API.</Text>
      {!temPass && <Text style={{ color: c.warn, marginBottom: 8 }}>Defina primeiro a palavra-passe do backup.</Text>}
      <TextInput style={input} value={p1} onChangeText={setP1} secureTextEntry placeholder={temPass ? 'Nova palavra-passe do backup (opcional)' : 'Palavra-passe do backup (12+ caracteres)'} placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={p2} onChangeText={setP2} secureTextEntry placeholder="Repetir palavra-passe" placeholderTextColor={c.muted} autoCapitalize="none" />
      <Btn t="Guardar palavra-passe" f={definirPass} sec />
      <Btn t="Escolher pasta do backup diário (pode ser o Google Drive)" f={pasta} sec />
      <Btn t="Fazer backup agora" f={agora} />
      <Btn t="Partilhar ficheiro .letimax (ex.: para o Drive)" f={enviar} sec />
      <TextInput style={{ ...input, marginTop: 8 }} value={pRest} onChangeText={setPRest} secureTextEntry placeholder="Palavra-passe do ficheiro a restaurar (vazio = a deste telemóvel)" placeholderTextColor={c.muted} autoCapitalize="none" />
      <Btn t="Restaurar de um ficheiro .letimax" f={restaurarAgora} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>O backup diário corre sozinho quando abre a APP depois das 02:00. O perfil de acesso não é copiado de propósito: num telemóvel novo cria o PIN de novo.</Text>

      {H('Voz da LétimaX')}
      <View style={{ flexDirection: 'row' }}>
        {[['servidor', 'ElevenLabs (servidor)'], ['telefone', 'Voz do telemóvel']].map(([k, l]) => (
          <TouchableOpacity key={k} style={chip(v.voz_modo === k)} onPress={async () => { setV((a) => ({ ...a, voz_modo: k })); await setConfig('voz_modo', k); }}><Text style={{ color: v.voz_modo === k ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Se o servidor não responder, a APP usa automaticamente a voz do telemóvel.</Text>

      {H('Comando de activação')}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: c.text, flex: 1 }}>Pedir a frase falada depois do PIN ou biometria</Text>
        <Switch value={v.cmd_activacao_on !== '0'} onValueChange={async (x) => { setV((a) => ({ ...a, cmd_activacao_on: x ? '1' : '0' })); await setConfig('cmd_activacao_on', x ? '1' : '0'); }} trackColor={{ true: c.gold }} />
      </View>
      {F('cmd_activacao', 'Frase de activação', 'LétimaX, iniciar')}
      <Btn t="Guardar frase" f={() => guardar(['cmd_activacao'])} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>A frase é só uma conveniência: não identifica quem fala. A protecção real é o PIN e a biometria.</Text>

      {H('Bloqueio de acesso e autonomia')}
      {F('max_tentativas', 'Falhas de PIN antes do primeiro bloqueio (padrão 3)', '3', true)}
      {F('bloqueio_min', 'Duração do primeiro bloqueio, em minutos (padrão 5)', '5', true)}
      {F('duracao_autonomo', 'Duração do modo autónomo, em horas (padrão 4)', '4', true)}
      <Btn t="Guardar" f={() => guardar(['max_tentativas', 'bloqueio_min', 'duracao_autonomo'])} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>Os bloqueios seguintes sobem sozinhos: 2x as falhas = 30 min, 3x = 24 h, 4x = permanente.</Text>

      {H('Chaves guardadas no servidor')}
      {chaves == null && <Text style={{ color: c.muted }}>Sem ligação ao servidor.</Text>}
      {chaves && !chaves.length && <Text style={{ color: c.muted }}>Nenhuma chave guardada ainda.</Text>}
      {chaves && chaves.map((n) => (
        <View key={n} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: c.card, borderRadius: 10, padding: 10, marginBottom: 6 }}>
          <Text style={{ color: c.text }}>{n}</Text>
          <TouchableOpacity onPress={() => apagarChave(n)}><Text style={{ color: c.err }}>Eliminar</Text></TouchableOpacity>
        </View>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Só mostra os nomes. O valor de uma chave nunca volta para o telemóvel.</Text>
    </View>
  );
}
