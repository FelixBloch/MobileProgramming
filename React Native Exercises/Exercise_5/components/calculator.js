import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import{createAppContainer} from'react-navigation';
import{createStackNavigator} from'react-navigation-stack'

const calculator = (props) => {
    navigationOptions = { title: 'Calculator',};

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
    const [data, setData] = useState([]);

    const plusButtonPressed = () =>{
        setResult(parseInt(number1) + parseInt(number2));
        const text =`${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`;
        setData([...data, {key:text}]);
        setNumber1('');
        setNumber2('');
    }

    const minusButtonPressed = () => {
        setResult(parseInt(number1) - parseInt(number2));
        const text =`${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}`;
        setData([...data, {key:text}]);
        setNumber1('');
        setNumber2('');
    }

    const{ navigate } = props.navigation;

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
                <Button onPress={() => navigate('History', {data})} title="History"/>
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

calculator.navigationOptions = ({navigate}) => ({title: 'Calculator'});

export default calculator;