import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#D6B15E';
const base = {
  gold: GOLD, accent: '#63DCEB', ok: '#45D6A0', err: '#FF6478',
  warn: '#F2B65D', glow: 'rgba(214,177,94,0.16)',
};
export const light = {
  ...base, bg: '#F3F1EB', text: '#171713', muted: '#777365',
  card: '#FFFFFF', border: '#D9D1BF', soft: '#E9E3D6',
  bubbleUser: '#F2E6C9', bubbleBot: '#FFFFFF',
  panel: '#FAF8F2', field: '#F7F4EC',
};
export const dark = {
  ...base, bg: '#07090D', text: '#F4F1E8', muted: '#A6A292',
  card: '#10151C', border: '#28323D', soft: '#151C24',
  bubbleUser: '#292315', bubbleBot: '#101820',
  panel: '#0D131A', field: '#0A1016',
};
const Ctx = createContext(null);
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('dark');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);
