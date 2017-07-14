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
