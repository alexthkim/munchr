import React from 'react';
import { Navigator, TouchableOpacity, StyleSheet, Text, View, Modal, Switch } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import SwipeScreen from './screens/SwipeScreen';

import styles from './assets/styles';

export default StackNavigator({
  Login: { screen: LoginScreen },
  Swipe: { screen: SwipeScreen }
});
