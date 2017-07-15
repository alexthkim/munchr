import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Carousel from 'react-native-carousel';

import styles from '../assets/styles';

export default () =>
<Carousel
  width={styles.windowWidth}
  animate={false}
  indicatorSize={20}
  indicatorSpace={15}
  indicatorOffset={-25}
>

  <View style={styles.carouselContainer}>

    <View style={styles.imageContainer}>

      <Image style={styles.image}
        source={require('./../assets/first.png')}
      />
    </View>
  </View>

  <View style={styles.carouselContainer}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('./../assets/intro.png')}
      />
    </View>
  </View>

  <View style={styles.carouselContainer}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('./../assets/examples.png')}
      />
    </View>
  </View>

</Carousel>;
