import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'

const history = (props) => {
    navigationOptions = { title: 'History',};
    
    const{ data } = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            
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

history.navigationOptions = ({navigate}) => ({title: 'History'});

export default history;