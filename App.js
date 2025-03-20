// Import dependencies
import React, { useEffect, useState } from "react";
import type {Node} from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BetScreen from './screens/BetScreen';
import WalletScreen from './screens/WalletScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
   //initial app structure for Unibets, put navigation between login, Register, Home, Bet and Wallet screens.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bet" component={BetScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
