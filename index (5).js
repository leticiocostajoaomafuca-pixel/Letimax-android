import { registerRootComponent } from 'expo';
import './src/services/service'; // regista o serviço em primeiro plano (tem de ser fora de componentes)
import App from './App';

registerRootComponent(App);
