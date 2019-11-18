import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{ createAppContainer } from'react-navigation';
import{ createStackNavigator } from'react-navigation-stack'
import{ Ionicons } from '@expo/vector-icons';
import Places from './components/Places.js';
import Map from './components/Map.js';

export default function App() {
  const AppNavigator = createStackNavigator({
    Places: {screen: Places},
    Map: {screen: Map}
  });

    const AppContainer = createAppContainer(AppNavigator);

  return (
    <AppContainer/>
  );
}
