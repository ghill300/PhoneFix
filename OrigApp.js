import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Header from './components/Header';
import Home from './components/Home';
import Repair from './components/Repair';


function HomeScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
      
      <TouchableOpacity onPress = {() => navigation.navigate('Repair')}>
        <View style = {styles.button}
           >
        <Text style = {styles.text}>Repair</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('Cases')}>
        <View style = {styles.button}
           >
        <Text style = {styles.text}>Cases</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate('Checkout')}>
        <View style = {styles.button}
           >
        <Text style = {styles.text}>Checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function RepairScreen({navigation}) {
  return (
    <View style={{ StyleSheet }}>
      <Repair/>
    </View>
  );
}

function CasesScreen({navigation}) {
  return (
    <View style={{ StyleSheet }}>
      
    </View>
  );
}

function CheckoutScreen({navigation}) {
  return (
    <View style={{ StyleSheet }}>
     
    </View>
  );
}

const Stack = createStackNavigator();

function OrigApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}   options={{ title: 'Home' }}/>
        <Stack.Screen name="Repair" component={RepairScreen}   options={{ title: 'Repair' }}/>
        <Stack.Screen name="Cases" component={CasesScreen}   options={{ title: 'Cases' }}/>
        <Stack.Screen name="Checkout" component={CheckoutScreen}   options={{ title: 'Checkout' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'deepskyblue', 
    alignItems: 'center', 
    justifyContent: 'center',
    height: 50,
    margin: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }

});

export default OrigApp;