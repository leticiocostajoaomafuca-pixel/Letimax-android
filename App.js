import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';
import { TorchProvider } from './src/components/TorchHost';
import { startService } from './src/services/service';
import { Alert } from 'react-native';
import { autoBackup } from './src/services/backup';
import { processarFila } from './src/services/queue';
import { api } from './src/services/api';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  const [destino, setDestino] = useState(null);
  useEffect(() => { getDb(); }, []);
  useEffect(() => {
    if (stage !== 'main') return;
    getConfig('servico_activo').then((v) => v === '1' && startService().catch(() => {}));
    autoBackup().catch(() => {});
    processarFila().catch(() => {});
  }, [stage]);
  const afterAuth = async () => {
    const feito = await getConfig('primeiro_uso');
    setStage(feito ? 'main' : 'firstuse');
    if (feito) {
      // sem chave OpenAI configurada, o chat não responde: encaminha para as Configurações
      api.get('/chaves/lista', 8000).then((d) => {
        if (!d.chatConfigured) {
          setDestino('configuracoes');
          Alert.alert('Falta a chave de IA', 'Adicione OPENAI_API_KEY nas Configurações. A chave será guardada cifrada no servidor. O armazenamento seguro tem de estar configurado no servidor.');
        }
      }).catch(() => {});
    }
  };
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={(ir) => { setDestino(ir ? 'configuracoes' : null); setStage('main'); }} />}
      {stage === 'main' && <TorchProvider><Root destino={destino} /></TorchProvider>}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
