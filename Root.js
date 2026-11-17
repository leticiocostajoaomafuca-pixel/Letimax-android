import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, createNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';
import EngineScreen from '../screens/EngineScreen';
import FinancasScreen from '../screens/FinancasScreen';
import SaudeScreen from '../screens/SaudeScreen';
import FilaScreen from '../screens/FilaScreen';
import VoiceSetupScreen from '../screens/VoiceSetupScreen';
import TopIndicators from '../components/TopIndicators';
import { SCREENS } from '../screens/screens.config';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen, financas: FinancasScreen, saude: SaudeScreen };
const viaEngine = (id) => !!SCREENS[id];
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses-outline', Dashboard: 'speedometer-outline', Produtos: 'cube-outline', Mercado: 'trending-up-outline', Marketing: 'megaphone-outline' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold,
      tabBarInactiveTintColor: c.muted,
      tabBarLabelStyle: { fontSize: 10, fontWeight: '700', letterSpacing: 0.4, paddingBottom: 3 },
      tabBarStyle: { height: 62, paddingTop: 7, paddingBottom: 7, backgroundColor: c.panel, borderTopColor: c.border, borderTopWidth: 1, elevation: 12 },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={EngineScreen} initialParams={{ id: 'dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={EngineScreen} initialParams={{ id: 'mercado' }} />
      <Tab.Screen name="Marketing" component={EngineScreen} initialParams={{ id: 'marketing' }} />
    </Tab.Navigator>
  );
}

export const navRef = createNavigationContainerRef();
export default function Root({ destino }) {
  const { c, isDark } = useTheme();
  useEffect(() => { if (destino && navRef.isReady()) navRef.navigate(destino); }, [destino]);
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, dark: isDark, colors: { ...base.colors, background: c.bg, card: c.panel, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer ref={navRef} theme={navTheme}>
      <Drawer.Navigator initialRouteName={destino || 'Principal'} screenOptions={{
        headerStyle: { backgroundColor: c.panel, elevation: 0, shadowOpacity: 0, borderBottomWidth: 1, borderBottomColor: c.border },
        headerTintColor: c.gold, headerTitleStyle: { color: c.text, fontWeight: '800', letterSpacing: 0.5 },
        headerRight: () => <TopIndicators />,
        drawerStyle: { backgroundColor: c.panel, width: 304 },
        drawerActiveTintColor: c.gold, drawerInactiveTintColor: c.muted,
        drawerActiveBackgroundColor: c.glow,
        drawerLabelStyle: { fontSize: 13, fontWeight: '600', marginLeft: -14 },
        drawerItemStyle: { borderRadius: 10, marginHorizontal: 10, marginVertical: 2 },
        drawerContentContainerStyle: { paddingTop: 8 },
      }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX', drawerLabel: 'Painel principal' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || (viaEngine(m.id) ? EngineScreen : ModuleScreen)} options={{ title: m.nome }} initialParams={{ id: m.id, titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="voz" component={VoiceSetupScreen} options={{ title: 'Cadastro de voz' }} />
        <Drawer.Screen name="fila" component={FilaScreen} options={{ title: 'Fila offline' }} />
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
