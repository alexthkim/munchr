import React from 'react';
import {
  AsyncStorage,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Switch,
  Slider,
  ListView,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';

import LoginButton from '../components/LoginButton';
import SwipeNavbar from '../components/swipeNavbar';
import SwipeCards from '../components/SwipeCards';
import VoteButtons from '../components/VoteButtons';
import IntroCards from '../components/IntroCards'

import styles from '../assets/styles';

export default class SwipeScreen extends React.Component {

  constructor() {
    super();

    this.foodPrefChoices = [
      {
        key: 'meat',
        name: 'Meat'
      },
      {
        key: 'red_meat',
        name: 'Red meat'
      },
      {
        key: 'beef',
        name: 'Beef'
      },
      {
        key: 'pork',
        name: 'Pork'
      },
      {
        key: 'seafood',
        name: 'Seafood'
      },
      {
        key: 'nuts',
        name: 'Nuts'
      },
      {
        key: 'tree_nuts',
        name: 'Tree nuts'
      },
      {
        key: 'peanuts',
        name: 'Peanuts'
      },
      {
        key: 'gluten',
        name: 'Gluten'
      },
      {
        key: 'dairy',
        name: 'Dairy'
      }
    ];

    this.state = {
      settingsVisible: false,
      switchValue: false,

      searchRadius: 1.0,
      displayRadius: 1.0,
      foodPreferences: this.foodPrefChoices.slice(0,5),
      response:[]
    };
  }


  toggleModalVisibility(bool) {
    this.setState({
      settingsVisible: bool
    })
  }

  toggleSwitch(value) {
    this.setState({ switchValue: value });
  }

  // Called when settings have been changed
  // Sends request to server to recalculate user information
  reloadPreferences() {

  }

  // deletes asyncstorage and go back to login page
  logout() {
    AsyncStorage.removeItem('username');
    this.toggleModalVisibility(false);
    this.props.navigation.navigate('Login');
  }

  updateSearchRadius(value) {
    this.setState({
      searchRadius: Math.round(value*10)/10,
      displayRadius: Math.round(value*10)/10
    });
  }

  updateSearchRadiusDisplay(value) {
    this.setState({ displayRadius: Math.round(value*10)/10 });
  }

  addFoodPreference(value) {
    const newItem = this.foodPrefChoices.find(e => e.name === value);
    this.setState({ foodPreferences: [...this.state.foodPreferences, newItem] });
    // this.setState({ foodPreferences: selected})
  }

  removeFoodPreference(id) {
    this.setState({ foodPreferences: this.state.foodPreferences.filter(e => e.key !== id) });
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Modal
          animationType="slide"
          visible={this.state.settingsVisible}
          onRequestClose={() => this.reloadPreferences()}>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.toggleModalVisibility(false)}>
                <Icon name="close" size={20} color='black' />
          </TouchableOpacity>

          <View style={{alignItems: 'center', padding: 15}}>
            <Text style={{fontSize: 24}}>Preferences</Text>
          </View>

          <View style={{width: '100%', alignItems: 'center', justifyContent:'center'}}>

            <View style={{width: '90%', margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{flex: 2}}>
                IDK What to name this setting
              </Text>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                {this.state.switchValue ?
                  <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>OFF</Text> :
                  <Text style={{fontWeight: 'bold', color: 'red'}}>OFF</Text>}
                <Switch
                  onValueChange={val => this.toggleSwitch(val)}
                  value={this.state.switchValue}
                />
                {this.state.switchValue ?
                  <Text style={{fontWeight: 'bold', color: 'green'}}>ON</Text> :
                  <Text style={{fontWeight: 'bold', color: 'lightgrey'}}>ON</Text>}
              </View>
            </View>

            <View style={{width:'90%', margin: 20, justifyContent:'center'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Search Distance:</Text>
                <Text>{this.state.displayRadius} mi.</Text>
              </View>
              <Slider
                style={{width: '100%'}}
                maximumValue={5.0}
                minimumValue={0.1}
                step={0.1}
                value={this.state.searchRadius}
                onValueChange={value => this.updateSearchRadiusDisplay(value)}
                onSlidingComplete={value => this.updateSearchRadius(value)} />
            </View>

            <View style={{width:'90%', margin: 20, justifyContent:'center'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 2}}>Current dietary restrictions:</Text>

                  <ModalDropdown
                    options={this.foodPrefChoices
                              .map(item => item.name)
                              .filter(item => this.state.foodPreferences
                                .map(item=>item.name)
                                .indexOf(item) === -1
                              )
                            }
                    defaultValue="+"
                    textStyle={{ color: 'green', fontSize: 18 }}
                    style={styles.addButton}
                    dropdownStyle={{ width: 100 }}
                    onSelect={(index, value)=>this.addFoodPreference(value)}
                    />
              </View>

              <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
              {this.state.foodPreferences.map(foodPref =>
                <View
                  key={foodPref.key}
                  style={{
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
                  }}>
                  <Text style={{color: '#555555', margin: 5}}>{foodPref.name}</Text>
                  <TouchableOpacity
                    onPress={()=>this.removeFoodPreference(foodPref.key)} >
                    <Icon name="close" size={10} color='darkgrey' />
                  </TouchableOpacity>

                </View>
              )}
            </View>


            </View>

            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red'
              }}
              onPress={() => this.logout()}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Log Out</Text>
            </TouchableOpacity>
          </View>

        </Modal>

        <SwipeNavbar openModal={() => this.toggleModalVisibility(true)} />
        <SwipeCards navigator={this.props.navigation}/>
      </View>
    );
  }
}
