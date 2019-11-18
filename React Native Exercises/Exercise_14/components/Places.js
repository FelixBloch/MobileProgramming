import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import{createAppContainer} from'react-navigation';
import{createStackNavigator} from'react-navigation-stack';
import * as SQLite from 'expo-sqlite';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase('shoppingdb.db');

const Places = (props) => {
    navigationOptions = { title: 'Places',};

    const[address, setAddress] = useState('');
    const[data, setData] = useState([]);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists addresslist (id integer primary key not null, address text);');
        });
        updateAddressList();
    }, []);
    
      const saveAddress = () => {
        db.transaction(tx => {
            tx.executeSql('insert into addresslist (address) values (?);', [address]);    
        }, null, updateAddressList
        )
      }
    
      const updateAddressList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from addresslist;', [], (_, { rows }) =>
            setData(rows._array)
            ); 
        });
        setAddress('');
      }
    
      const deleteAddress = (id) => {
        db.transaction(
            tx => {
                tx.executeSql(`delete from addresslist where id = ?;`, [id]);
            }, null, updateAddressList
        )}
    


    const{ navigate } = props.navigation;

    return(
        <View>
            <View>
                <Input
                    label='Placefinder'
                    placeholder='Type in address'
                    value={address}
                    onChangeText={address => setAddress(address)}
                />
            </View>
            <View>
                <Button buttonStyle='color: gray' onPress={saveAddress} title="SAVE" />
            </View>
            <View>
                {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        subtitle={item.address}
                        rightTitle='show on map >'
                        onPress={() => navigate('Map', item.address)}
                        onLongPress={() => deleteAddress(item.id)}
                        bottomDivider
                    />
                ))
                }
            </View>
        </View>
    );
}

Places.navigationOptions = ({navigate}) => ({title: 'Places'});

export default Places;