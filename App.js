import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BoletScreen from './screens/BoletScreen';
import BoletoDetalleScreen from './screens/BoletoDetalleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: ''}} />
        <Stack.Screen name="Bolet" component={BoletScreen} options={{ title: ''}} />
        <Stack.Screen name="BoletoDetalle" component={BoletoDetalleScreen} options={{ title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
