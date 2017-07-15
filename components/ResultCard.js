import React from 'react';
import {View, Text, Image, ListView} from 'react-native';
import styles from '../assets/styles'
import ResultPhotos from './ResultPhotos';
export default class ResultCard extends React.Component{

  constructor(){
    super()
    this.state=({
      restaurant:{
        name:'Trader Joes',
        location:'0.2mi',
        rating:4,
        price:2,
        img:[
          'https://s3-media4.fl.yelpcdn.com/bphoto/hAHr4nQG7bNU2PqSOSRJBA/o.jpg',
          'https://s3-media1.fl.yelpcdn.com/bphoto/-l6c16KBZ8SnaPTg6aS_nQ/o.jpg',
          'https://s3-media2.fl.yelpcdn.com/bphoto/kI5kRRnRoo54j5y65Dd0WQ/o.jpg']
      },
    })
  }

    render(){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      return (
        <ListView style={{backgroundColor:'white', marginTop:100}}
          dataSource={ds.cloneWithRows([1,2])}
          renderRow={()=>

            <View style={styles.restaurantContainer}>
              <View style={styles.restaurantTextContainer}>
                <Text style={{flex:7,fontSize:20}}>
                  {this.state.restaurant.name}
                </Text>
                <Text style={{flex:1}}>
                  {this.state.restaurant.location}
                </Text>
              </View>

              <View style={styles.restaurantText2}>
                <Text style={{flex:7}}>
                  {this.state.restaurant.rating}
                </Text>
                <Text style={{flex:1}}>
                  {this.state.restaurant.price}
                </Text>
              </View>

              <View style={styles.imageListContainer}>
                <ResultPhotos img={this.state.restaurant.img}/>
              </View>
              <View style={styles.restaurantCuisine}>
                <Text>
                  American
                </Text>
              </View>
            </View>

          }
        />


        )
      }
    }
