import React from 'react';
import {View, Text} from 'react-native';
import ResultCard from './../components/ResultCard';
//w
export default class ResultsScreen extends React.Component{
  render(){
    return(
      <View>
        <ResultCard cards={this.props.navigation.state.params.cards}/>
      </View>
    )
  }
}
