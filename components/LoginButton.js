import React from 'react';
import {AsyncStorage, View, Button, Alert, Text,TouchableOpacity} from 'react-native';
import {Facebook} from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      console.log('success');
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
     `https://graph.facebook.com/me?fields=email,name,timezone,locale,gender&access_token=${token}`)
     .then((response)=>(response.json()))
     .then((response)=> {
       fetch('http://graph.facebook.com/'+ response.id +'/picture?type=large&w‌idth=360&height=360')
       .then((responseImgUrl)=>{
         alert(response);
         AsyncStorage.setItem('username',JSON.stringify(response));
         fetch('https://horizons-munchr.herokuapp.com/api/login',  {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             fbID: JSON.parse(response),
           })
         }).then((response2) => response2.json())
         .then((responseJSON) => {
           AsyncStorage.setItem('mongoinfo',JSON.stringify(responseJSON.id));
           this.setState({username:JSON.parse(result).name});
           this.props.navigator.navigate('Swipe');
         })
       })
     })
   }
 }

  componentDidMount(){
    AsyncStorage.getItem('username')
    .then((result)=>{
      if (result != null) {
        fetch('https://horizons-munchr.herokuapp.com/api/login',  {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fbID: JSON.parse(result).id,
          })
        }).then((response) => {
          return response.json()})
        .then((responseJSON) => {
          AsyncStorage.setItem('mongoinfo',JSON.stringify(responseJSON.id));
          this.setState({username:JSON.parse(result).name});
          this.props.navigator.navigate('Swipe');
        });
      }
    })
  }

  render() {
    return (
    <View style={styles.loginContainer}>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={(()=>this.facebookLogin())}>
        <Text style={styles.loginText}>Log In with Facebook</Text>
        <Icon name="facebook-square" size={20} color="white" />
      </TouchableOpacity>

    </View>
  );
  }

}

export default LoginButton;
