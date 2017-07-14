import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginButton from './components/LoginButton'
import IntroCards from './components/IntroCards'
import styles from './assets/styles';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <IntroCards />
        <LoginButton />
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
