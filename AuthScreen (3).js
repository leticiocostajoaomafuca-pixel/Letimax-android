import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

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
