import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('shoppingdb.db');

export default function App() {
  const[product, setProduct] = useState('');
  const[amount, setAmount] = useState('');
  const[data, setData] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, product text, amount text);');
    });
    updateShoppingList();    
  }, []);

  const saveProduct = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shoppinglist (product, amount) values (?, ?);', [product, amount]);    
      }, null, updateShoppingList
    )
  }

  const updateShoppingList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
        setData(rows._array)
      ); 
    });
    setProduct('');
    setAmount('');
  }

  const deleteProduct = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shoppinglist where id = ?;`, [id]);
      }, null, updateShoppingList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        placeholder='Product'
        value={product} 
        onChangeText={product => setProduct(product)} />
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        placeholder='Amount'
        value={amount} 
        onChangeText={amount => setAmount(amount)} />

      <View style={styles.grid1}>
        <Button onPress={saveProduct} title="SAVE" />
      </View>
      <View style={styles.grid2}>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>Shopping List</Text>
        <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}/>
        <FlatList
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.product}, {item.amount}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteProduct(item.id)}> bought</Text></View>} 
        data={data} 
        ItemSeparatorComponent={listSeparator} 
      />
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
    // flex: 1/3,
    flexDirection: 'row'
  },
  grid2:{
    flex: 1/3,
    alignItems: 'center'
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff'
   },
});
