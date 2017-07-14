import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Image,
  Button,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Location, Permissions,MapView } from 'expo';
import Swiper from 'react-native-swiper'
import Carousel from 'react-native-carousel';

import styles from '../assets/styles';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
  };

  render() {

    return (

      <Carousel width={styles.windowWidth}
        animate={false}
        indicatorSize={20}
        indicatorSpace={15}
        indicatorOffset={styles.windowHeight*0.2}
        >
        <View style={styles.container}>
          <Image
            style={{width: "60%", height: "56%"}}
            source={require('./img/intro.png')}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={{width: "60%", height: "56%"}}
            source={require('./img/examples.png')}
          />
        </View>
        <View style={styles.container}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    );
  }
}



export default HomeScreen;
