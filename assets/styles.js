import {
  Dimensions
} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * windowWidth) / 100;
    return Math.round(value);
}

function hp(percentage) {
    const value = (percentage * windowHeight) / 100;
    return Math.round(value);
}

export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  loginButton: {
    flex:0.5,
    justifyContent:"center"
  },

  loginText:{
    color: '#3b5998',
  },

  carouselContainer: {
    width: windowWidth,
    height: hp(78),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:0.5
  },

  imageContainer:{
    width: "60%",
    height: "60%"
  },

  image:{
    width: "100%",
    height: "100%",
    borderWidth:0.5,
    borderColor:'white',
    borderRadius:20
  },

  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
