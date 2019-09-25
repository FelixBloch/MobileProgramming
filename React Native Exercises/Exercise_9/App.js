import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState({
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });

  const getMap = () => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address  + '&key=AIzaSyBeoiuF7RhYJ091IX-XEwR7oHD7nTiNNI4';
    console.log('https://maps.googleapis.com/maps/api/geocode/json?address=' + address  + '&key=AIzaSyBeoiuF7RhYJ091IX-XEwR7oHD7nTiNNI4');
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setRegion({
        latitude: responseJson.results[0].geometry.location.lat,
        longitude: responseJson.results[0].geometry.location.lng,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221
      })
   })
   .catch((error) => { 
     Alert.alert('Error' , error); 
   });
  }

  return (
    <>
      <MapView
      style={{ flex:1 }}
      region={region}>
      <Marker
      coordinate={{
        latitude: region.latitude,
        longitude: region.longitude}}
        />
      </MapView>
      
      <View style={styles.container}>
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          value={address} 
          placeholder="Enter Address"
          onChangeText={(address) => setAddress(address)} 
        />
        <Button title="Show" onPress={getMap}/>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
