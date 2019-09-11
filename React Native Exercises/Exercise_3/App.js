import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const[data, setData] = useState([]);

  const plusButtonPressed = () =>{
    setResult(parseInt(number1) + parseInt(number2));
    const text =`${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`;
    setData([...data, {key:text}]);
  }

  const minusButtonPressed = () => {
    setResult(parseInt(number1) - parseInt(number2));
    const text =`${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}`;
    setData([...data, {key:text}]);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={number1} 
        onChangeText={number1 => setNumber1(number1)} />

      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={number2} 
        onChangeText={number2 => setNumber2(number2)} />

      <View style={styles.grid1}>
        <Button onPress={plusButtonPressed} title="+" />
        <Button onPress={minusButtonPressed} title="-" />
      </View>
      <View style={styles.grid2}>
        <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid1: {
    flex: 1/3,
    flexDirection: 'row'
  },
  grid2:{
    flex: 1/3
  },
});
