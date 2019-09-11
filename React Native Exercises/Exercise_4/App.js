import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const[shopItem, setShopItem] = useState('');
  const[data, setData] = useState([]);

  const addButtonPressed = () => {
    setData([...data, {key:shopItem}]);
    setShopItem('');
  }

  const clearButtonPressed = () => {
    setData([]);
    setShopItem('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={shopItem} 
        onChangeText={shopItem => setShopItem(shopItem)} />

      <View style={styles.grid1}>
        <Button onPress={addButtonPressed} title="ADD" />
        <Button onPress={clearButtonPressed} title="CLEAR" />
      </View>
      <View style={styles.grid2}>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>Shopping List</Text>
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
    flex: 1/3,
    alignItems: 'center'
  },
});
