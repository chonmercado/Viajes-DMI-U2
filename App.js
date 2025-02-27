import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { BlurView } from 'expo-blur';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, useAnimatedHeaderHeight } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const uri = "https://img.lovepik.com/background/20211029/medium/lovepik-resort-hotel-cellphone-wallpaper-background-image_400261815.jpg"
const profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>¡Bienvenido!</Text>
    </View>
  );
}

function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account Created')
      const user= userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in')
      const user= userCredential.user;
      console.log(user)
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      
      <ScrollView contentContaineStyle= {{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={10}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture}/>
            <View>
              <Text style={{fontSize: 20, fontWeight: '400', color: '#1e1e1e'}} >Correo Electrónico</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='Agrega tu correo electrónico' />
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: '400', color: '#1e1e1e'}} >Contraseña</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry={true} placeholder='Introduce tu contraseña' />
            </View>
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#9cdcfe'}]}>
                <Text style={{fontSize: 20, fontWeight: '400', color:'black'}}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#bd0c0c'}]}>
                <Text style={{fontSize: 20, fontWeight: '400', color:'black'}}>Crear Cuenta</Text>
              </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component= {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  profilePicture: {
    width: '100',
    height: '100',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10, 
    padding: 18,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  }
});
