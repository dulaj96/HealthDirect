import { View, Text } from 'react-native';
import React from 'react';
import Router from './src/router/Router';
import Home from './src/screen/auth/Home';
import Login from './src/screen/auth/Login';
import Register from './src/screen/auth/Register';
import AccountType from './src/screen/auth/AccountType';
import MainHome from './src/screen/auth/MainHome';
import Store from './src/screen/auth/Store';
import Splash from './src/screen/splash/Splash';

const App = () => {
  return (
    <Router />
  )
}

export default App;