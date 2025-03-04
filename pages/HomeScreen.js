import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToBolet = () => {
    navigation.navigate('Bolet');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#FF7E1C', '#FF6347']} style={styles.header}>
        <Text style={styles.headerText}>¡Vacaciones Soñadas!</Text>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Fechas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Región</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.offerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image source={require('../assets/images/acapulco.jpg')} style={styles.image} />
            <Text style={styles.offerText}>Acapulco</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image source={require('../assets/images/cdmx.jpg')} style={styles.image} />
            <Text style={styles.offerText}>Ciudad de México</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image source={require('../assets/images/bora-bora-1.jpg')} style={styles.image} />
            <Text style={styles.offerText}>Bora Bora</Text>
            <Text style={styles.price}>$25 dlls</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.containerOfertas}>
        <Text style={styles.sectionTitle}>Más ofertas de vacaciones</Text>
      </View>

      <View style={styles.offerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image source={require('../assets/images/mazatlan.jpg')} style={styles.image} />
            <Text style={styles.offerText}>Mazatlán</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToBolet} style={styles.offerCard}>
            <Image source={require('../assets/images/cancun.jpg')} style={styles.image} />
            <Text style={styles.offerText}>Cancún</Text>
            <Text style={styles.price}>$371</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.highlightSection}>
        <Text style={styles.highlightTitle}>Destinos Populares</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={navigateToBolet} style={styles.highlightCard}>
            <Image source={require('../assets/images/tulum.jpg')} style={styles.highlightImage} />
            <Text style={styles.highlightText}>Tulum</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToBolet} style={styles.highlightCard}>
            <Image source={require('../assets/images/puebla.jpg')} style={styles.highlightImage} />
            <Text style={styles.highlightText}>Puebla</Text>
          </TouchableOpacity>
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
    padding: 20,
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  containerOfertas: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
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
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginRight: 15,
    width: width * 0.45,
    padding: 10,
    alignItems: 'center',
    borderColor: '#FF7E1C',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#FF6347',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: '#FF7E1C',
  },
  highlightSection: {
    padding: 20,
    alignItems: 'center',
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7E1C',
    marginBottom: 10,
  },
  highlightCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  highlightImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;