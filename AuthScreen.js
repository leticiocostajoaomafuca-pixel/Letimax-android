import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { getConfig } from '../db/database';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';
import { signInOwner, getOwnerIdToken } from '../services/firebaseAuth';

const GREETING = 'Bem-vindo, senhor Letício à LétimaX, qual é a tarefa de hoje?';
const normT = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ')
  .replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax').replace(/\s+/g, ' ').trim();

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login | activar
  const modeRef = useRef('boot');
  const ir = (m) => { modeRef.current = m; setMode(m); };
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const finalizar = async () => {
    setBad(false);
    try {
      const token = await getOwnerIdToken();
      if (token) {
        await resetFailures();
        ir('feito');
        Speech.speak(GREETING, { language: 'pt-PT' });
        onSuccess();
        return;
      }
    } catch (error) {
      // Sem configuração ou sessão Firebase: pedir autenticação interactiva.
    }
    ir('firebase');
    setMsg('Confirme a conta Firebase autorizada para aceder ao servidor.');
  };

  const entrarFirebase = async () => {
    setBad(false);
    setMsg('A validar a conta...');
    try {
      await signInOwner(email, password);
      setPassword('');
      await resetFailures();
      ir('feito');
      Speech.speak(GREETING, { language: 'pt-PT' });
      onSuccess();
    } catch (error) {
      setBad(true);
      setMsg(error?.code === 'auth/invalid-credential'
        ? 'Email ou palavra-passe incorrectos.'
        : (error?.message || 'Não foi possível validar a conta Firebase.'));
    }
  };

  // O reconhecimento por palavra de activação ainda não está implementado nesta versão.
  // Evita depender de expo-speech-recognition, que não faz parte das dependências instaladas.
  const passo3 = async () => finalizar();

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) passo3();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { ir('login'); tryBio(); } else ir('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(passo3, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return passo3();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const normalInput = { ...input, textAlign: 'left', letterSpacing: 0 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  if (mode === 'firebase') {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
        <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
        <Text style={{ color: c.muted, textAlign: 'center', marginVertical: 20 }}>Autenticação segura do proprietário</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Email Firebase" placeholderTextColor={c.muted} autoCapitalize="none" keyboardType="email-address" style={normalInput} />
        <TextInput value={password} onChangeText={setPassword} placeholder="Palavra-passe Firebase" placeholderTextColor={c.muted} secureTextEntry style={input} />
        <TouchableOpacity style={btn} onPress={entrarFirebase}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Validar conta</Text>
        </TouchableOpacity>
        {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
      </View>
    );
  }


  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}
