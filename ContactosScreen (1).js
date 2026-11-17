import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}
