import React, { Component } from 'react';
import { View } from 'react-native';
//import header.js header component
import Header from './src/components/Header';
//import list component
import List from './src/components/List';

//default file output sent for other files
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header headerText={'MAGIC: THE GATHERING'} headerImg={'http://cartamundi.com/wp-content/uploads/2016/01/iso800-Cartamundi-november-2015-2970-1024x683.jpg'} />
      <List url={'https://api.deckbrew.com/mtg/sets'} type={'set'} />
      </View>
    );
  }
}
