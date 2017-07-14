import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Facebook} from 'expo';

export default class App extends React.Component {

  async componentDidMount(){

  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1440702659353377', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=37b0c6c23f865535cb6d62a4efa6b71f`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
