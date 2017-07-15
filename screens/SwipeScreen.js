import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Modal, Switch } from 'react-native';

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

  render() {
    return (
      <View style={styles.appContainer}>
        <Modal
          animationType="slide"
          visible={this.state.settingsVisible}
          onRequestClose={() => this.reloadPreferences()}>

          <TouchableOpacity onPress={() => this.toggleModalVisibility(false)}>
              <Text>Close</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>ON</Text>
            <Switch
              onValueChange={val => this.toggleSwitch(val)}
              value={this.state.switchValue}
            />
            <Text>OFF</Text>
          </View>

        </Modal>

        <SwipeNavbar openModal={() => this.toggleModalVisibility(true)} />
        <SwipeCards />
      </View>
    );
  }
}
