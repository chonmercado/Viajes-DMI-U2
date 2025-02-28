import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const BoletScreen = () => {
  const navigation = useNavigation(); // Hook para navegación

  // Datos del boleto
  const boleto = {
    destino: 'Acapulco',
    precio: 371,
    fechaSalida: '15/03/2025',
    nombre: '',
    correo: '',
    telefono: ''
  };

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleComprarBoleto = () => {
    // Actualizamos los datos del boleto con la información ingresada por el usuario
    boleto.nombre = nombre;
    boleto.correo = correo;
    boleto.telefono = telefono;

    // Navegamos a la pantalla de BoletoDetalle, pasando los detalles del boleto
    navigation.navigate('BoletoDetalle', { boleto });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Detalles del Boleto</Text>
      </View>

      {/* Detalles del vuelo */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Destino: {boleto.destino}</Text>
        <Text style={styles.detailText}>Precio: ${boleto.precio}</Text>
        <Text style={styles.detailText}>Fecha de salida: {boleto.fechaSalida}</Text>
      </View>

      {/* Formulario para detalles del pasajero */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Información del pasajero</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={telefono}
          onChangeText={setTelefono}
        />
      </View>

      {/* Botón para comprar boleto */}
      <TouchableOpacity style={styles.button} onPress={handleComprarBoleto}>
        <Text style={styles.buttonText}>Comprar Boleto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#1e90ff',
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
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginVertical: 5,
  },
  formContainer: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BoletScreen;
