import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ResultCard from './../components/ResultCard';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/styles'

const MenuButton = ({ onPress, icon }) =>
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.menuButton}>
          <Icon name={icon} size={30} color='lightgrey' />
        </View>
      </TouchableOpacity>
    </View>;

export default class ResultsScreen extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'white',flex:1
      }}>
        <View
          style={styles.navbar}>
          <MenuButton
            onPress={() => this.props.navigation.navigate('Swipe')}
            icon="refresh"
          />
        </View>
        <ResultCard cards={this.props.navigation.state.params.cards}/>
      </View>
    );
  }
}
