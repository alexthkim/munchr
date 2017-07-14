import {
  Dimensions
} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * windowWidth) / 100;
    return Math.round(value);
}


export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  carouselContainer: {
    width: viewportWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  cardsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(95),
    height: wp(80),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'darkgrey'
  }
};
