import {
  Dimensions
} from 'react-native';

const themeColor = "#ff3333";
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * windowWidth) / 100;
    return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * windowHeight) / 100;
  return Math.round(value);
}

const navbarHeight = 70;
const votesHeight = 70;


export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  navbar: {
    // backgroundColor: 'lightgrey',
    width: windowWidth,
    height: navbarHeight,
    position: 'absolute',
    top: 0,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10
  },

  menuButton: {
    width: navbarHeight - 10*2,
    height: navbarHeight - 10*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: navbarHeight/2 - 10,
    borderColor: 'darkgrey',
    borderWidth: 2
  },

  closeButton: {
    top: 10,
    left: 10,
    margin: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2
  },

  logoText: {
    color: 'darkgrey',
    fontStyle: 'italic',
    fontSize: 24
  },

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

  cardsContainer: {
    top: navbarHeight/2,
    height: windowHeight - navbarHeight,
    // width: windowWidth,
    // height: hp(60),
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'pink'
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: hp(75),
    padding: 10,
    // borderWidth: 2,
    borderRadius: 10,
    // borderColor: 'darkgrey'
  },

  cardImage: {
    flex: 5,
    width: '95%',
    // borderColor: 'darkgrey',
    // borderWidth: 2,
    borderRadius: 10
  },

  cardTitle: {
    flex: 1,
    fontSize: 24
  }
};
