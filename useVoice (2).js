import { useCallback, useRef, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

// Reconhecimento de voz em português. Escuta só com a APP aberta (o Android bloqueia microfone em segundo plano).
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const cont = useRef(false);
  const paused = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current) return false;
    const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!p.granted) return false;
    ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    return true;
  }, []);
  const beginRef = useRef(begin);
  beginRef.current = begin;

  useSpeechRecognitionEvent('start', () => setListening(true));
  useSpeechRecognitionEvent('end', () => {
    setListening(false); setPartial('');
    if (cont.current && !paused.current) setTimeout(() => beginRef.current(), 500);
  });
  useSpeechRecognitionEvent('result', (e) => {
    const t = (e.results && e.results[0] && e.results[0].transcript) || '';
    setPartial(t);
    if (e.isFinal && t.trim()) cb.current(t.trim());
  });
  useSpeechRecognitionEvent('error', (e) => {
    if (['not-allowed', 'service-not-allowed', 'language-not-supported'].includes(e.error)) cont.current = false;
  });

  return {
    listening, partial,
    start: begin,
    stop: () => ExpoSpeechRecognitionModule.stop(),
    setContinuous: (v) => { cont.current = v; if (v) begin(); else ExpoSpeechRecognitionModule.stop(); },
    pause: () => { paused.current = true; ExpoSpeechRecognitionModule.stop(); },   // enquanto a LétimaX fala
    resume: () => { paused.current = false; if (cont.current) begin(); },
  };
}
