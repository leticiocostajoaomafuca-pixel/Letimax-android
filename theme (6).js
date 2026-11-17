import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
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
