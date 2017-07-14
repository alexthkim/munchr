import {
  Dimensions
} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * windowWidth) / 100;
    return Math.round(value);
}

const slideHeight = windowHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = windowHeight * 0.4 + wp(2) * 2;

export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  container: {
    width: viewportWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  card: {

  }
};
