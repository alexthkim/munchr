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
      cards:[{id:0}],
      cardResults: []
      }
  }

  componentDidMount(){
    AsyncStorage.getItem('username')
    .then((result)=>{
      var id = JSON.parse(result).id;
      this.setState({id:id});
      fetch('https://horizons-munchr.herokuapp.com/api/generate/' + id,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response)=>response.json())
      .then((responseJSON) =>{
        this.setState({cards:responseJSON.cards})
      }
    );
    })
  }

  handleYup(card) {
    const newCard = {ID: Number(card['ID']), swipeRight: true};
    const newCards = this.state.cardResults.concat(newCard);
    this.setState({cardResults: newCards});
  }

  handleNope(card) {
    const newCard = {ID: Number(card['ID']), swipeRight: false};
    const newCards = this.state.cardResults.concat(newCard);
    this.setState({cardResults: newCards});
  }

  render() {
    return (
      <View style={styles.cardsContainer}>
        <SwipeCards
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => this.props.navigator.navigate('Results',{cards:this.state.cardResults})}
          yupText="YUM"
          nopeText="EW"
          handleYup={card => this.handleYup(card)}
          handleNope={card => this.handleNope(card)}
        />
      </View>
    );
  }
}
