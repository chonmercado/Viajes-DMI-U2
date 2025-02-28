import React from 'react';
import InstallPrompt from './services/InstallPrompt';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages';
import HomeScreen from './pages/HomeScreen';
import BoletScreen from './pages/BoletScreen';
import BoletoDetalleScreen from './pages/BoletoDetalleScreen';
import './assets/css/styles.css';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <InstallPrompt /> 

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: '', headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: ''}} />
          <Stack.Screen name="Bolet" component={BoletScreen} options={{ title: ''}} />
          <Stack.Screen name="BoletoDetalle" component={BoletoDetalleScreen} options={{ title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
