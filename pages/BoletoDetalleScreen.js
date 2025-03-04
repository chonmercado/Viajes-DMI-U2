import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BoletoDetalleScreen = ({ route }) => {
  const { boleto } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [nombre, setNombre] = useState(boleto.nombre);
  const [correo, setCorreo] = useState(boleto.correo);
  const [telefono, setTelefono] = useState(boleto.telefono);
  const [destino, setDestino] = useState(boleto.destino);
  const [precio, setPrecio] = useState(boleto.precio);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Recibo de Compra</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Correo:</Text>
          <TextInput style={styles.input} value={correo} onChangeText={setCorreo} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Destino:</Text>
          <TextInput style={styles.input} value={destino} onChangeText={setDestino} />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Precio:</Text>
          <Text style={styles.price}>${precio}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Fecha de salida:</Text>
          <Calendar
            markedDates={{ [selectedDate]: { selected: true, selectedColor: '#FF6347' } }}
            onDayPress={handleDateSelect}
            monthFormat={'yyyy MM'}
            hideExtraDays={true}
            markingType={'simple'}
          />
        </View>
      </View>

      <View style={styles.confirmationContainer}>
        <Text style={styles.confirmationText}>¡Gracias por tu compra!</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={() => { /* Lógica de confirmación */ }}>
        <Text style={styles.confirmButtonText}>Confirmar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    backgroundColor: '#FF6347',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  price: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
  },
  confirmationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BoletoDetalleScreen;