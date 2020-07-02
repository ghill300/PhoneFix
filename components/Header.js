import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const logo = {
  uri: 'PhoneFix/download.png'  
}

const Header = () => {
  return (
    <View style ={styles.header}>
      <Image style={styles.Image} source={require('../assets/download.png')} resizeMode='cover' />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 120,
    alignSelf: 'center',
    paddingBottom: 100,
  },

});

export default Header;