import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from '../assets/styles';

const MenuButton = ({ onPress, content }) =>
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuButton}>
          <Text>{content}</Text>
        </View>
      </TouchableOpacity>
    </View>;

export default class SwipeNavbar extends React.Component {

  goToPage(page) {

  }

  render() {
    return (
      <View
        style={styles.navbar}>
        <MenuButton
          onPress={() => this.goToPage('index')}
          text='Settings'
        />
        <Text style={styles.logoText}>
          Munchr
        </Text>
        <MenuButton
          onPress={() => this.goToPage('results')}
          content='Results'
        />
      </View>
    );
  }
}
