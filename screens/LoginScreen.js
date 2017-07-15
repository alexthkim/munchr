import React from 'react';
import {View} from 'react-native';
import IntroCards from '../components/IntroCards';
import LoginButton from '../components/LoginButton';
import styles from './../assets/styles'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <IntroCards/>
        <LoginButton navigator={this.props.navigation}/>
      </View>
    );
  }
}
