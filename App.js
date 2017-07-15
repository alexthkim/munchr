import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginButton from './components/LoginButton';
import IntroCards from './components/IntroCards';
import LoginScreen from './screens/LoginScreen';
import SwipeScreen from './screens/SwipeScreen';
import ResultsScreen from './screens/ResultsScreen';

import styles from './assets/styles';

// export default class App extends React.Component {
//
//   render() {
//     return (
//       <View style={styles.appContainer}>
//         <IntroCards />
//         <LoginButton />
//       </View>
//     );
//   }
// }



//Navigator
export default StackNavigator({
Login: {
  screen: LoginScreen,
},
Swipe:{
  screen: SwipeScreen,
}
},
{initialRouteName: 'Login'
});
