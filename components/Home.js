import React from 'react';

import { View, Text, Image, Button, StyleSheet} from 'react-native';


const Home = ({navigation}) => {
  return (
    <View style={{ StyleSheet}}>
        <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },

});

export default Home;