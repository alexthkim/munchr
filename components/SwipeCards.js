import React from 'react';
import { Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const Card = ({ text, image }) => (
  <View style={styles.card}>
    <Image
      style={{ width: '90%', height: '80%' }}
      source={{uri: image}}
     />
    <Text>{text}</Text>
  </View>
);

const NoMoreCards = () => (
  <View>
    <Text>No more cards!</Text>
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: '9HU349H8340',
          text: 'Pizza',
          image: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'
        },
        {
          id: '9Y434U982T4',
          text: 'Dumplings',
          image: 'http://i.ndtvimg.com/i/2015-01/dumplings_625x350_81421835686.jpg'
        },
        {
          id: '34UY98439RU4',
          text: 'Pad Thai',
          image: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/magazine/best-pad-thai/pagePropertiesImage/padthai-1.jpg'
        }
      ]
    };
  }

  handleYup(card) {

  }

  handleNope(card) {

  }

  render() {
    return (
      <View style={styles.cardsContainer}>
        <SwipeCards
          style={{
            width: 375,
          }}
          cards={this.state.cards}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          handleYup={card => this.handleYup(card)}
          handleNope={card => this.handleNope(card)}
        />
      </View>
    );
  }
}
