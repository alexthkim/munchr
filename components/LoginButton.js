import React from 'react';
import {AsyncStorage, View, Button, Alert, Text,TouchableOpacity} from 'react-native';
import {Facebook} from 'expo';
// import navigation
import styles from '../assets/styles'

class LoginButton extends React.Component {
  constructor(){
    super();
    this.state=({
      username:''
    })
  }

  async facebookLogin() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1440702659353377',
      { permissions: ['public_profile', 'email'] }
    );

    if (type === 'success') {
      fetch(`https://graph.facebook.com/me?fields=email,name,timezone,locale,gender&access_token=${token}`)
        .then(response => response.json())
        .then(response =>
          fetch('http://graph.facebook.com/'+ response.id +'/picture?type=large&w‌idth=360&height=360')
            .then(response => {
              AsyncStorage.setItem('username', JSON.stringify(response));
              this.props.navigator.navigate('Swipe');
            })
        );
   }
  }

  componentDidMount(){
    AsyncStorage.getItem('username')
      .then(result => {
        this.setState({ username: JSON.parse(result).name });
        this.props.navigator.navigate('Swipe');
      });
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
