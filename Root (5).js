import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
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
import TopIndicators from '../components/TopIndicators';
import { SCREENS } from '../screens/screens.config';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen, financas: FinancasScreen, saude: SaudeScreen };
const viaEngine = (id) => !!SCREENS[id];

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
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

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerRight: () => <TopIndicators />, headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || (viaEngine(m.id) ? EngineScreen : ModuleScreen)} options={{ title: m.nome }} initialParams={{ id: m.id, titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
