import React from 'react';
import { View, Button, Alert, Text,TouchableOpacity} from 'react-native';
import {Facebook} from 'expo';
// import navigation
import styles from '../assets/styles'

class LoginButton extends React.Component {
  constructor(){
    super();
    this.facebookLogin=this.facebookLogin.bind(this)
  }
  async facebookLogin() {

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1440702659353377',
      { permissions: ['public_profile'] }
    );
    console.log(this.props)
    if (type === 'success') {
      console.log('success');
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
     `https://graph.facebook.com/me?access_token=${token}`)
     .then((response)=>(response.json()))
     .then((response)=>{
     console.log(response);
     //Navigator

     })
    }
    }

    nav(){
      // const { navigate } = this.props.navigation;
      this.props.navigator.navigate('Swipe');
    }

  render() {
    return (
    <View style={styles.loginButton}>

      <TouchableOpacity onPress={(()=>this.facebookLogin())}>
        <Text style={styles.loginText}>Log In with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(()=>this.nav())}>
        <Text style={styles.loginText}>nav</Text>
      </TouchableOpacity>

    </View>
  );
  }

}

export default LoginButton;
