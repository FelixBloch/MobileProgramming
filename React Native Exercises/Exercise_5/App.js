import React, { useState } from 'react';
import Calculator from './components/calculator.js';
import History from './components/history.js';
import{ createAppContainer } from'react-navigation';
import{ createStackNavigator } from'react-navigation-stack'
import{ Ionicons } from '@expo/vector-icons';

export default function App() {
  const AppNavigator = createStackNavigator({
    Calculator: {screen: Calculator},
    History: {screen: History}});

    const AppContainer = createAppContainer(AppNavigator);

  return (
    <AppContainer/>
  );
}