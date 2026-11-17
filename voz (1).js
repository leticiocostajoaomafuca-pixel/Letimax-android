import * as Speech from 'expo-speech';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import { rawPost } from './api';
import { getConfig } from '../db/database';

// Voz masculina da ElevenLabs via servidor (POST /voz). Se falhar, usa a voz do telemóvel.
// ASSUNÇÃO: /voz devolve áudio (audio/mpeg) ou JSON {url} / {audio_base64}.
function blobParaBase64(blob) {
  return new Promise((ok, err) => {
    const r = new FileReader();
    r.onloadend = () => ok(String(r.result).split(',')[1]);
    r.onerror = err;
    r.readAsDataURL(blob);
  });
}
const fallback = (t, onDone) => Speech.speak(t, { language: 'pt-PT', onDone, onStopped: onDone, onError: onDone });

export async function falarVoz(texto, onDone) {
  const t = String(texto || '').slice(0, 1200); // limita o custo por resposta
  if (!t) return onDone && onDone();
  if ((await getConfig('voz_modo')) === 'telefone') return fallback(t, onDone);
  let ficheiro = null;
  try {
    const res = await rawPost('/voz', { texto: t });
    if (!res.ok) throw new Error('voz ' + res.status);
    let uri;
    const ct = res.headers.get('content-type') || '';
    let b64;
    if (ct.includes('audio')) b64 = await blobParaBase64(await res.blob());
    else {
      const j = await res.json();
      uri = j.url || j.audio_url;
      b64 = j.audio_base64;
    }
    if (!uri && b64) {
      ficheiro = FileSystem.cacheDirectory + 'voz_' + Date.now() + '.mp3';
      await FileSystem.writeAsStringAsync(ficheiro, b64, { encoding: FileSystem.EncodingType.Base64 });
      uri = ficheiro;
    }
    if (!uri) throw new Error('sem áudio');
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync({ uri }, { shouldPlay: true });
    sound.setOnPlaybackStatusUpdate((s) => {
      if (s.didJustFinish) {
        sound.unloadAsync();
        if (ficheiro) FileSystem.deleteAsync(ficheiro, { idempotent: true }).catch(() => {});
        if (onDone) onDone();
      }
    });
  } catch (e) {
    if (ficheiro) FileSystem.deleteAsync(ficheiro, { idempotent: true }).catch(() => {});
    fallback(t, onDone);
  }
}
