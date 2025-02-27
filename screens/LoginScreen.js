import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthViewModel } from '../viewmodels/AuthViewModel';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, error, loading, handleCreateAccount, handleSignIn } = useAuthViewModel();
  const navigation = useNavigation();

  const uri = "https://img.lovepik.com/background/20211029/medium/lovepik-resort-hotel-cellphone-wallpaper-background-image_400261815.jpg"
const profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"

  const handleSignInPress = async () => {
   // const isSuccess = await handleSignIn(email, password); // DESCOMENTAR PARA LOGIN CON FIREBASE
   const isSuccess = true;
    if (isSuccess) {
      navigation.navigate('Home');
    }
  };

  const handleCreateAccountPress = () => {
    handleCreateAccount(email, password);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={styles.login}>
        <Text style={styles.header}>Iniciar Sesión</Text>
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
        <TouchableOpacity onPress={handleSignInPress} style={[styles.button]}>
                <Text style={{fontSize: 20, fontWeight: '400', color:'white'}}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccountPress} style={[styles.button, {backgroundColor: '#bd0c0c'}]}>
                <Text style={{fontSize: 20, fontWeight: '400', color:'white'}}>Crear Cuenta</Text>
              </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { 
    width: 250, 
    height: 40, 
    marginBottom: 10, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    paddingLeft: 10, 
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#fff',
  },
  login: {
    width: '350',
    height: '500',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 200,
    backgroundColor: '#5ec4e5',
  },
  button: { 
    width: 250, 
    height: 40, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5, 
    marginBottom: 10 
  },
  buttonText: { color: 'white', fontSize: 16 },
  error: { color: 'red', marginBottom: 10 },
});

export default LoginScreen;