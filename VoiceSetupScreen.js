import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useTheme } from '../theme/theme';
import { getConfig, setConfig } from '../db/database';

const FRASES = [
  'LétimaX, eu sou o Letício e esta é a minha voz.',
  'Bem-vindo, senhor Letício à LétimaX, qual é a tarefa de hoje?',
  'LétimaX, inicia a minha tarefa e apresenta o resumo.'
];

export default function VoiceSetupScreen() {
  const { c } = useTheme();
  const recording = useRef(null);
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState([false, false, false]);
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    Promise.all(FRASES.map((_, i) => getConfig('voz_amostra_' + (i + 1))))
      .then((items) => setSaved(items.map(Boolean))).catch(() => {});
    return () => {
      if (recording.current) recording.current.stopAndUnloadAsync().catch(() => {});
    };
  }, []);

  const start = async () => {
    try {
      setMessage('');
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) throw new Error('Autorize o acesso ao microfone nas definições do telemóvel.');
      await Audio.setAudioModeAsync({ allowsRecordingAndroid: true, playsInSilentModeAndroid: true });
      const rec = new Audio.Recording();
      await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await rec.startAsync();
      recording.current = rec;
      setListening(true);
    } catch (e) { setMessage(e.message || 'Não foi possível iniciar a gravação.'); }
  };

  const stop = async () => {
    const rec = recording.current;
    if (!rec || busy) return;
    setBusy(true);
    setListening(false);
    recording.current = null;
    try {
      await rec.stopAndUnloadAsync();
      const uri = rec.getURI();
      if (!uri) throw new Error('A gravação não foi encontrada.');
      const folder = FileSystem.documentDirectory + 'letimax-voz/';
      await FileSystem.makeDirectoryAsync(folder, { intermediates: true }).catch(() => {});
      const target = folder + 'amostra-' + (step + 1) + '.m4a';
      await FileSystem.copyAsync({ from: uri, to: target });
      await setConfig('voz_amostra_' + (step + 1), target);
      setSaved((old) => old.map((v, i) => i === step ? true : v));
      setMessage('Amostra ' + (step + 1) + ' guardada neste telemóvel.');
      if (step < 2) setStep(step + 1);
    } catch (e) {
      setMessage(e.message || 'Não foi possível guardar a gravação.');
    } finally { setBusy(false); }
  };

  const card = { backgroundColor: c.card, borderColor: c.border, borderWidth: 1, borderRadius: 22, padding: 22, marginTop: 24 };
  const goldButton = { backgroundColor: c.gold, borderRadius: 18, paddingVertical: 15, paddingHorizontal: 20, alignItems: 'center' };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingBottom: 60 }}>
      <Text style={{ color: c.gold, fontSize: 13, letterSpacing: 6, textAlign: 'center', marginTop: 18 }}>L É T I M A X</Text>
      <Text style={{ color: c.muted, fontSize: 11, letterSpacing: 4, marginTop: 42 }}>PASSO {step + 1} DE 3                         VOZ</Text>
      <View style={{ height: 2, backgroundColor: c.border, marginTop: 18, flexDirection: 'row' }}>
        <View style={{ width: ((step + 1) / 3 * 100) + '%', backgroundColor: c.gold }} />
      </View>
      <Text style={{ color: c.text, fontSize: 38, marginTop: 52, fontWeight: '300' }}>Cadastro de Voz</Text>
      <Text style={{ color: c.muted, fontSize: 17, lineHeight: 27, marginTop: 12 }}>Leia cada frase em voz alta, com calma e no seu tom natural.</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 54 }}>
        <Text style={{ color: c.muted, letterSpacing: 3, fontSize: 11 }}>FRASE {step + 1} / 3</Text>
        <Text style={{ color: c.gold, letterSpacing: 2 }}>{saved.filter(Boolean).length * 33}%</Text>
      </View>
      <View style={{ height: 5, backgroundColor: c.border, borderRadius: 4, marginTop: 12, overflow: 'hidden' }}>
        <View style={{ height: 5, width: (saved.filter(Boolean).length / 3 * 100) + '%', backgroundColor: c.gold }} />
      </View>
      <View style={card}>
        <Text style={{ color: c.gold, fontSize: 32 }}>“</Text>
        <Text style={{ color: c.text, fontSize: 27, lineHeight: 42, marginTop: 4 }}>{FRASES[step]}</Text>
        <Text style={{ color: saved[step] ? c.ok : c.muted, fontSize: 11, letterSpacing: 2, marginTop: 18 }}>{saved[step] ? 'AMOSTRA GUARDADA' : 'AGUARDA GRAVAÇÃO'}</Text>
      </View>
      <TouchableOpacity disabled={busy} onPress={listening ? stop : start} style={{ alignSelf: 'center', width: 116, height: 116, borderRadius: 58, borderWidth: 2, borderColor: listening ? c.err : c.gold, alignItems: 'center', justifyContent: 'center', marginTop: 42, backgroundColor: c.glow }}>
        {busy ? <ActivityIndicator color={c.gold} /> : <Text style={{ color: listening ? c.err : c.gold, fontSize: 38 }}>{listening ? '■' : '🎙'}</Text>}
      </TouchableOpacity>
      <Text style={{ color: c.muted, textAlign: 'center', marginTop: 12 }}>{busy ? 'A guardar...' : listening ? 'Toque para terminar a gravação' : 'Toque no microfone para gravar'}</Text>
      {!!message && <Text style={{ color: c.gold, textAlign: 'center', marginTop: 18 }}>{message}</Text>}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 28 }}>
        <TouchableOpacity disabled={step === 0 || busy || listening} onPress={() => setStep((s) => s - 1)} style={{ padding: 12, opacity: step === 0 ? 0.3 : 1 }}><Text style={{ color: c.muted }}>Anterior</Text></TouchableOpacity>
        <TouchableOpacity disabled={step === 2 || busy || listening} onPress={() => setStep((s) => s + 1)} style={{ padding: 12, opacity: step === 2 ? 0.3 : 1 }}><Text style={{ color: c.gold }}>Seguinte</Text></TouchableOpacity>
      </View>
      {saved.every(Boolean) && <View style={{ ...goldButton, marginTop: 18 }}><Text style={{ color: '#090806', fontWeight: '800' }}>CADASTRO CONCLUÍDO</Text></View>}
      <Text style={{ color: c.muted, fontSize: 11, lineHeight: 17, marginTop: 22, textAlign: 'center' }}>As três gravações ficam guardadas localmente neste telemóvel. Este cadastro prepara amostras de voz; não activa, por si só, autenticação biométrica nem clonagem de voz.</Text>
    </ScrollView>
  );
}
