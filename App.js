import React from 'react';
import { Navigator, TouchableOpacity, StyleSheet, Text, View, Modal, Switch } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import SwipeScreen from './screens/SwipeScreen';

import styles from './assets/styles';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <SwipeNavbar />
        <SwipeCards />
        <VoteButtons />
      </View>
    );
  }
}



//Navigator
// export default StackNavigator({
//   Home:{
//     screen: HomeScreen,
//   },
// Login: {
//   screen: LoginScreen,
// },
// Swipe:{
//   screen: SwiperScreen,
// },
// Register: {
//   screen: RegisterScreen,
// },
// Users: {
//   screen: UsersScreen,
// },
// Messages: {
//   screen: MessagesScreen
// }
// },
// {initialRouteName: 'Home'});
