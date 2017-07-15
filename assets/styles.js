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

const navbarHeight = 80;

export default {
  windowHeight: windowHeight,
  windowWidth: windowWidth,

  navbar: {
    backgroundColor: 'white',
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
    // width: navbarHeight - 20*2,
    // height: navbarHeight - 20*2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // borderRadius: navbarHeight/2 - 20,
    // borderColor: 'darkgrey',
    // borderWidth: 2
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

  addButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'green',
    borderWidth: 2
  },

  logoText: {
    color: 'darkgrey',
    fontStyle: 'italic',
    fontSize: 24,
    paddingTop:30
  },

  loginContainer: {
    flex:0.5,
    justifyContent:"center",
  },

  loginButton: {
    backgroundColor: '#3b5998',
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row'
  },

  loginText:{
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },

  logoutButton: {
    width: '90%',
    height: 40,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },

  friendsButton: {
    flex: 2,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
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
  },

  restaurantContainer:{
    height:windowHeight * 0.4,
    backgroundColor:'white',
    padding:40,
    marginTop:windowHeight/4,
    marginBottom:10
    // borderWidth:1,
    // borderColor:'skyblue'
  },

  restaurantTextContainer:{
    alignItems: 'flex-end',
    flexDirection:'row',
    // borderColor:'black',
    // borderWidth:1
  },

  restaurantText:{
    flex:7,
    fontSize:24
  },

  restaurantText2:{
    alignItems: 'flex-end',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10
    // borderColor:'black',
    // borderWidth:1
  },

  imageListContainer:{
  width:'100%',
  height:'80%',
  // borderColor:'red',
  // borderWidth:1,
  paddingTop:5,
  paddingBottom:5
},

restaurantCuisine:{
  // borderColor: 'purple',
  // borderWidth: 1
},

imageSmallContainer:{
  // borderColor: 'pink',
  // borderWidth: 2,
  marginRight:5
},

imageSmall:{
  borderRadius:10,
  margin:0,
  width:windowWidth/2.5,
  height:'100%',
  // borderColor:'blue',
  // borderWidth:1
},

foodPrefListing: {
  height: 24,
  borderWidth: 2,
  borderColor: '#666666',
  borderRadius: 12,
  padding: 5,
  marginRight: 5,
  marginBottom: 5,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
}

};
