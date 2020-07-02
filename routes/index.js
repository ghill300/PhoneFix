import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import Header from '../components/Header';
import Home from '../components/Home';
import Cart from '../components/Cart.component';



function HomeScreen({ navigation}) {
    return (
      <View style={styles.container}>
        <Header />
        <Home />
        
        <TouchableOpacity onPress = {() => navigation.navigate('Products')}>
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

function ProductsScreen({navigation}) {
    return (
        <Products/>
    );
  }

  function CheckoutScreen({navigation}) {
    return (
        <Checkout/>
    );
  }

  function ReceiptScreen({navigation}) {
    return (
        <Receipt/>
    );
  }

const Stack = createStackNavigator();

function Route(navigation) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}   options={{ title: 'Home' }}/>
          <Stack.Screen name="Products" component={ProductsScreen}   options={{ title: 'Repairs', 
                headerRight: props => <Cart navigation = {navigation}/>}}/> 
          <Stack.Screen name="Checkout" component={CheckoutScreen}   options={{ title: 'Checkout' }}/>
          <Stack.Screen name="Receipt" component={ReceiptScreen}   options={{ title: 'Receipt' }}/>
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


export default Route;