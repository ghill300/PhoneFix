import React from 'react';

import { View, Text, Image, Button, StyleSheet} from 'react-native';


const Repair = ({navigation}) => {
  return (
    <View style={{ StyleSheet}}>
        <Image style={styles.Image} source={require('./CrackedPhone.png')} resizeMode='contain' />
    </View>
  );
};



const styles = StyleSheet.create({
  Image: {
    height: 120,
    width: 350,
  },

});

export default Repair;