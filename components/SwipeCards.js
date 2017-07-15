import React from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import styles from '../assets/styles';

const Card = ({ URL }) => (
  <View style={styles.card}>
    <Image
      style={styles.cardImage}
      source={{uri: URL}}
      shadowOpacity={1}
     />
    <View style={{ flex: 1 }}></View>
  </View>
);

// const NoMoreCards = () => (
//
// );

export default class SwipeCardsMunchr extends React.Component {
  constructor() {
    super();
    this.state={
      id: 0,
      cards:[{id:0}]
    }
  }

  componentDidMount(){
    AsyncStorage.getItem('username')
    .then((result)=>{
      console.log(result);
      var id = JSON.parse(result).id;
      console.log(id);
      this.setState({id:id});
      fetch('https://horizons-munchr.herokuapp.com/api/generate/' + id,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response)=>response.json())
      .then((responseJSON) =>{

        console.log(responseJSON);
        this.setState({cards:responseJSON.cards})
      }
    );
    })
  }

  handleYup(card) {
    // this.setState
  }

  handleNope(card) {

  }

  render() {
    // console.log(typeof this.props.response);
    return (
      <View style={styles.cardsContainer}>
        <SwipeCards
          smoothTransition={false}
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => this.props.navigator.navigate('Results')}
          yupText="YUM"
          nopeText="EW"
          handleYup={card => this.handleYup(card)}
          handleNope={card => this.handleNope(card)}
        />
      </View>
    );
  }
}
