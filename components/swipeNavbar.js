import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/styles';

const MenuButton = ({ onPress, icon }) =>
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuButton}>
          <Icon name={icon} size={30} color='darkgrey' />
        </View>
      </TouchableOpacity>
    </View>;

export default class SwipeNavbar extends React.Component {

  goToPage(page) {

  }

  openModal() {

  }

  render() {
    return (
      <View
        style={styles.navbar}>
        <MenuButton
          onPress={this.props.openModal}
          icon="cog"
        />
        <Text style={styles.logoText}>
          munchr
        </Text>
        <MenuButton
          onPress={() => this.goToPage('results')}
          icon="shopping-basket"
        />
      </View>
    );
  }
}
