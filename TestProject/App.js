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
      <Header headerText={'MAGIC: THE GATHERING'} headerImg={'http://1.bp.blogspot.com/-fCsQQ7eJs6w/TiQbOcGhjzI/AAAAAAAAF2A/VYHhQG-c3mk/s1600/IMG_0266.JPG'} />
      <List url={'https://mtgjson.com/json/SetList.json'} type={'set'} />
      </View>
    );
  }
}
