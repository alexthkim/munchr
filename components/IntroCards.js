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

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const windowHeight = viewportHeight;


const styles = StyleSheet.create({
  container: {
    width: sliderWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
  };


  render() {
    console.log(windowHeight);

    return (

      <Carousel width={sliderWidth}
        animate={false}
        indicatorSize={20}
        indicatorSpace={15}
        indicatorOffset={windowHeight*0.2}
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
