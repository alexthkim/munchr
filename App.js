import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginButton from './components/LoginButton'

import styles from './assets/styles';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appContainer}>
        <LoginButton />
      </View>
    );
  }
}
