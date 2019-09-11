import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [result, setResult] = useState('Guess a number between 1-100');
  const [guesses, setGuesses] = useState(0);

  const buttonPressed = () =>{
    if(Number(number) == randomNumber){
      setResult(`${number} was correct!`);
      Alert.alert(`${number} was correct!`, `It took you ${guesses} guesses.`);
    }
    else if(Number(number) < randomNumber){
      setResult(`Your guess ${number} is too low!`);
      setGuesses(guesses + 1);
    }
    else if(Number(number) > randomNumber){
      setResult(`Your guess ${number} is too high!`);
      setGuesses(guesses + 1);
    }
    else{
      setResult(`Please enter a real number between 1 and 100!`)
    }
  }

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={number} 
        onChangeText={number => setNumber(number)} />
        
        <Button onPress={buttonPressed} title="MAKE GUESS" />
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
