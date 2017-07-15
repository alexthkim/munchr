"strict mode";

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginButton from './components/LoginButton';
import IntroCards from './components/IntroCards';
import LoginScreen from './screens/LoginScreen';
import SwipeScreen from './screens/SwipeScreen';
import ResultsScreen from './screens/ResultsScreen';

import styles from './assets/styles';

//Navigator
export default StackNavigator(
  {
    Login: { screen: LoginScreen },
    Swipe: { screen: SwipeScreen }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null
    }
  }
);
