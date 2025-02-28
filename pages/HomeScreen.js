import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

const HomeScreen = () => {
  const navigation = useNavigation();  // Hook para la navegación

  // Función para navegar a la pantalla de boletos
  const navigateToBolet = () => {
    navigation.navigate('Bolet');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Barra de navegación */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Las mejores ofertas de vuelo</Text>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Fechas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Región</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Ofertas de vuelo */}
      <View style={styles.offerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Oferta de vuelo 1 */}
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image
              source={require('../assets/images/02b89d5c_y.jpg')}
              style={styles.image}
            />
            <Text style={styles.offerText}>Acapulco</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          {/* Oferta de vuelo 2 */}
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image
              source={require('../assets/images/a0d800c0_y.jpg')}
              style={styles.image}
            />
            <Text style={styles.offerText}>Ciudad de México</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          {/* Agrega más ofertas aquí */}
        </ScrollView>
      </View>

      {/* Otras ofertas */}
      <View style={styles.containerOfertas}>
        <Text style={styles.sectionTitle}>Más ofertas</Text>
      </View>
      <View style={styles.offerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Oferta 1 */}
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image
              source={require('../assets/images/11cd32af_y.jpg')}
              style={styles.image}
            />
            <Text style={styles.offerText}>Mazatlán</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          {/* Oferta 2 */}
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image
              source={require('../assets/images/a0da2529_y.jpg')}
              style={styles.image}
            />
            <Text style={styles.offerText}>Cancún</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          {/* Agrega más ofertas aquí */}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1e90ff',
    padding: 20,
    alignItems: 'center',
    width: '100%', // Asegura que la barra ocupe todo el ancho
  },
  containerOfertas: {
    padding: 20,
    alignItems: 'center',
    width: '100%', // Asegura que la barra ocupe todo el ancho
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tabButton: {
    marginHorizontal: 10,
    padding: 10,
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  offerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  offerCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginRight: 15,
    width: width * 0.4, // Hacemos que las tarjetas sean un 40% del ancho de la pantalla
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  offerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#ff6347',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
