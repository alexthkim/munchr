import React from 'react';
import { View, Button, Alert, Text,TouchableOpacity} from 'react-native';
import {Facebook} from 'expo';

import styles from '../assets/styles'

class LoginButton extends React.Component {
  async facebookLogin() {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1440702659353377',
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      console.log('success');
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
     `https://graph.facebook.com/me?access_token=${token}`)
     .then((response)=>(response.json()))
     .then((response)=>
     console.log(response)
   )
 }
    }

  render() {
    return (
    <View style={styles.loginButton}>

      <TouchableOpacity onPress={(()=>this.facebookLogin())}>
        <Text style={styles.loginText}>Log In with Facebook</Text>
      </TouchableOpacity>

    </View>
  );
  }

}

export default LoginButton;
