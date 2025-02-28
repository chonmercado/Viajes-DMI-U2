import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoletoDetalleScreen = ({ route }) => {
  const { boleto } = route.params;  // Recibimos los datos del boleto

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Recibo de Compra</Text>
      </View>

      {/* Detalles del boleto */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Nombre: {boleto.nombre}</Text>
        <Text style={styles.detailText}>Correo: {boleto.correo}</Text>
        <Text style={styles.detailText}>Teléfono: {boleto.telefono}</Text>
        <Text style={styles.detailText}>Destino: {boleto.destino}</Text>
        <Text style={styles.detailText}>Precio: ${boleto.precio}</Text>
        <Text style={styles.detailText}>Fecha de salida: {boleto.fechaSalida}</Text>
      </View>

      {/* Confirmación de la compra */}
      <View style={styles.confirmationContainer}>
        <Text style={styles.confirmationText}>¡Gracias por tu compra!</Text>
      </View>
    </View>
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
  confirmationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
});

export default BoletoDetalleScreen;
