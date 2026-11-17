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

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <Root />}
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
