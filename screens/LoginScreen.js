import React from 'react';
import {View,Image} from 'react-native';
import IntroCards from '../components/IntroCards';
import LoginButton from '../components/LoginButton';
import styles from './../assets/styles'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>

        <IntroCards style={{marginTop:20}}/>
        <View style={{position: 'absolute', top: 20, left: 100, right:'10%', height:'10%', width: '50%'}}>
          <Image style={{ width: 200, height:70}}
            source={require('./../assets/munchr.png')}/>
        </View>
        <LoginButton navigator={this.props.navigation}/>
      </View>
    );
  }
}
