import React, { useState } from 'react';
import { StyleSheet, Text, View, View, Button, TextInput, Picker } from 'react-native';

export default function App() {

  componentDidMount() {
  }
  return (
    const pickerItems = this.state.rateKeys.map((item, index) => <Picker.Item key={index} label={item}></Picker.Item>)
    <View style={styles.container}>
      <View>
        <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({language: itemValue})}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
