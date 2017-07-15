import React from 'react';
import {
  AsyncStorage,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginButton from '../components/LoginButton';
import SwipeNavbar from '../components/swipeNavbar';
import SwipeCards from '../components/SwipeCards';
import VoteButtons from '../components/VoteButtons';
import IntroCards from '../components/IntroCards'

import styles from '../assets/styles';

export default class SwipeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      settingsVisible: false,
      switchValue: false
    };
  }

  toggleModalVisibility(bool) {
    this.setState({
      settingsVisible: bool
    })
  }

  toggleSwitch(value) {
    this.setState({
      switchValue: value
    })
  }

  // Called when settings have been changed
  // Sends request to server to recalculate user information
  reloadPreferences() {

  }

  // deletes asyncstorage and go back to login page
  logout() {
    AsyncStorage.removeItem('username');
    this.toggleModalVisibility(false);
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Modal
          animationType="slide"
          visible={this.state.settingsVisible}
          onRequestClose={() => this.reloadPreferences()}>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.toggleModalVisibility(false)}>
              {/* <View style={styles.closeButton}> */}
                <Icon name="close" size={20} color='black' />
              {/* </View> */}
          </TouchableOpacity>

          <View style={{alignItems: 'center', padding: 15}}>
            <Text style={{fontSize: 24}}>Preferences</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>ON</Text>
            <Switch
              onValueChange={val => this.toggleSwitch(val)}
              value={this.state.switchValue}
            />
            <Text>OFF</Text>
          </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'red'
          }}
          onPress={() => this.logout()}>
            <Text>Log Out</Text>
        </TouchableOpacity>

        </Modal>

        <SwipeNavbar openModal={() => this.toggleModalVisibility(true)} />
        <SwipeCards />
      </View>
    );
  }
}
