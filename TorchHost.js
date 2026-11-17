import React, { createContext, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// A lanterna no Expo só acende com uma câmara montada (invisível, 1x1 px). Só fica montada enquanto acesa.
export const TorchCtx = createContext({ setTorch: async () => false, on: false });

export function TorchProvider({ children }) {
  const [on, setOn] = useState(false);
  const [perm, request] = useCameraPermissions();
  const setTorch = async (v) => {
    if (v && !(perm && perm.granted)) {
      const r = await request();
      if (!r.granted) return false;
    }
    setOn(v);
    return true;
  };
  return (
    <TorchCtx.Provider value={{ setTorch, on }}>
      {children}
      {on && perm && perm.granted && <CameraView style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} facing="back" enableTorch />}
    </TorchCtx.Provider>
  );
}
