import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthViewModel } from '../viewmodels/AuthViewModel';
import { useNavigation } from '@react-navigation/native';

// Importa la imagen del logo
import logo from '../assets/images/logo01.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, error, loading, handleCreateAccount, handleSignIn } = useAuthViewModel();
  const navigation = useNavigation();

  const uri = "https://example.com/vacation-background.jpg"; // Reemplazar con imagen de vacaciones real

  const handleSignInPress = async () => {
    const isSuccess = await handleSignIn(email, password);
    if (isSuccess) {
      navigation.navigate('Home');
    } else {
      console.log('Error al iniciar sesión');
    }
  };

  const handleCreateAccountPress = async () => {
    const isSuccess = await handleCreateAccount(email, password);
    if (isSuccess) {
      navigation.navigate('Home');
    } else {
      console.log('Error al crear la cuenta');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#ff9900" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.loginContainer}>
          {/* Agregar el logo aquí */}
          <Image source={logo} style={styles.logo} />
          
          <Text style={styles.header}>¡Bienvenido!</Text>
          <Text style={styles.subHeader}>¡Listo para tus vacaciones soñadas?</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Contraseña"
          />
          {error && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity onPress={handleSignInPress} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCreateAccountPress} style={[styles.button, styles.createAccountButton]}>
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  loginContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
    elevation: 10,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2D5BFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FF7E1C',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 20,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#F9F9F9',
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#FF7E1C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 15,
  },
  createAccountButton: {
    backgroundColor: '#2D5BFF',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LoginScreen;
