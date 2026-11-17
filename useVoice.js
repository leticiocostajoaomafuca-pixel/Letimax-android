import { useCallback, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { transcribeAudio } from './api';

// Whisper transcreve o áudio no servidor. Não usa o serviço Google/Android.
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [partial, setPartial] = useState('');
  const recording = useRef(null);
  const continuous = useRef(false);
  const paused = useRef(false);
  const stopping = useRef(false);
  const chunkTimer = useRef(null);
  const callback = useRef(onFinal);
  const stopRef = useRef(null);
  callback.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current || recording.current || stopping.current || transcribing) return false;
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) throw new Error('Permita o acesso ao microfone nas definições do telemóvel.');
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true, staysActiveInBackground: false });
      const instance = new Audio.Recording();
      await instance.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await instance.startAsync();
      recording.current = instance;
      setPartial('');
      setListening(true);
      if (continuous.current) chunkTimer.current = setTimeout(() => stopRef.current?.(), 8000);
      return true;
    } catch (error) {
      setListening(false);
      setPartial(error.message || 'Não foi possível iniciar o microfone.');
      return false;
    }
  }, [transcribing]);

  const stop = useCallback(async () => {
    const instance = recording.current;
    if (!instance || stopping.current) return;
    stopping.current = true;
    if (chunkTimer.current) clearTimeout(chunkTimer.current);
    recording.current = null;
    setListening(false);
    setTranscribing(true);
    try {
      await instance.stopAndUnloadAsync();
      const uri = instance.getURI();
      if (!uri) throw new Error('Não foi possível obter a gravação.');
      const transcript = await transcribeAudio(uri, 60000);
      setPartial(transcript);
      if (transcript.trim()) await callback.current(transcript.trim());
    } catch (error) {
      setPartial(error.message || 'Falha ao reconhecer a voz.');
    } finally {
      setTranscribing(false);
      stopping.current = false;
      if (continuous.current && !paused.current) setTimeout(() => begin().catch(() => {}), 350);
    }
  }, [begin]);
  stopRef.current = stop;

  const setContinuous = useCallback((value) => {
    continuous.current = value;
    if (value) begin().catch(() => {});
    else if (recording.current) stop();
  }, [begin, stop]);

  const pause = useCallback(async () => {
    paused.current = true;
    if (chunkTimer.current) clearTimeout(chunkTimer.current);
    const instance = recording.current;
    recording.current = null;
    setListening(false);
    if (instance) {
      try { await instance.stopAndUnloadAsync(); } catch {}
    }
  }, []);

  const resume = useCallback(() => {
    paused.current = false;
    if (continuous.current) begin().catch(() => {});
  }, [begin]);

  return { listening, transcribing, partial, start: begin, stop, setContinuous, pause, resume };
}
