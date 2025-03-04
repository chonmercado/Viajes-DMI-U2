import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoletScreen = () => {
  const navigation = useNavigation();

  // Datos del boleto (puedes obtenerlos de una API o props)
  const boleto = {
    destino: 'Bora Bora',
    precio: 25,
    fechaSalida: '15/03/2025',
    fechaRegreso: '20/03/2025',
    nombre: '',
    correo: '',
    telefono: '',
    rating: 4.8,
    location: 'Islas Polinecias',
    description: 'Bora Bora es una isla del grupo de Sotavento de las Islas Comunitarias, Polinesia Francesa, colonia francesa de ultramar situada en...',
    images: [
      require('../assets/images/bora-bora-1.jpg'),
      require('../assets/images/bora-bora-2.jpg'),
      require('../assets/images/bora-bora-3.jpg'),
      // ... más imágenes
    ],
  };

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleComprarBoleto = () => {
    boleto.nombre = nombre;
    boleto.correo = correo;
    boleto.telefono = telefono;
    navigation.navigate('BoletoDetalle', { boleto });
  };

  return (
    <ImageBackground source={require('../assets/images/bora-bora-background.jpg')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{boleto.destino}</Text>
          <View style={styles.locationContainer}>
            <Image source={require('../assets/images/locacion.png')} style={styles.locationIcon} />
            <Text style={styles.locationText}>{boleto.location}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/images/star.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>{boleto.rating}</Text>
          </View>
          <Text style={styles.descriptionText}>{boleto.description}</Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Read more</Text>
          </TouchableOpacity>
          <Text style={styles.moreImagesText}>More images</Text>
          <ScrollView horizontal style={styles.imagesContainer}>
            {boleto.images.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
            <View style={styles.moreImagesCounter}>
              <Text style={styles.moreImagesCounterText}>+10</Text>
            </View>
          </ScrollView>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${boleto.precio} /person</Text>
            <TouchableOpacity style={styles.bookNowButton} onPress={handleComprarBoleto}>
              <Text style={styles.bookNowText}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: 'blue',
  },
  moreImagesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 5,
    borderRadius: 5,
  },
  moreImagesCounter: {
    width: 40,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  moreImagesCounterText: {
    color: 'white',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookNowButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
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
});

export default BoletScreen;