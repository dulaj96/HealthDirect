import { View, Text } from 'react-native';
import React from 'react';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import Home from '../screen/auth/Home';
import AccountType from '../screen/auth/AccountType';
import MainHome from '../screen/auth/MainHome';
import Store from '../screen/auth/Store';
import Splash from '../screen/splash/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="AccountType" component={AccountType} />
        <Stack.Screen options={{headerShown:false}} name="MainHome" component={MainHome} />
        <Stack.Screen options={{headerShown:false}} name="Store" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;