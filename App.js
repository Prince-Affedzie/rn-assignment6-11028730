import {View,StyleSheet} from 'react-native'
import {useState,useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HomeScreen from './HomeScreen'
import CartScreen from './CartScreen'
const Tab = createBottomTabNavigator()


const App =()=>{
  
const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      if (cart !== null) {
        setCartItems(JSON.parse(cart));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveCart = async (cart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

   const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.key !== product.key);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  return(
  <NavigationContainer>
    <Tab.Navigator initialRoute="Home">
    <Tab.Screen name="Home">
          {props => <HomeScreen {...props} addToCart={addToCart} />}
        </Tab.Screen>
    
    
    <Tab.Screen name="Cart">
          {props => <CartScreen {...props} cartItems={cartItems} removeFromCart={removeFromCart}/>}
        </Tab.Screen>
    
    
    
    </Tab.Navigator>
  
  </NavigationContainer>
)}

export default App