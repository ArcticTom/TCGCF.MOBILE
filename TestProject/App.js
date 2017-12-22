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
      <View>
      <Header headerText={'MAGIC: THE GATHERING'} />
      <List url={'https://api.deckbrew.com/mtg/sets'} type={'set'} />
      </View>
    );
  }
}
