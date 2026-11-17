import { requireNativeModule } from 'expo';

// Em Expo Go (sem build nativo) o módulo não existe: exportamos null e a APP avisa em vez de falhar.
let Native = null;
try { Native = requireNativeModule('LetimaxNative'); } catch (e) { Native = null; }
export default Native;
