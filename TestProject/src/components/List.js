import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ListStyles from './ListStyles';
import Set from './Set';
import Card from './Card';

//create SetList component
class List extends Component {
  //initialize sets
  state = { data: [] };

  //called before component renders
  componentWillMount() {
    axios.get(this.props.url)
      .then(response => this.setState({ data: response.data }));
  }

  renderData() {
    if (this.props.type === 'set') {
      return this.state.data.map(set =>
        <Set key={set.code} set={set} />
      );
    } else if (this.props.type === 'card') {
      return this.state.data.map(card =>
        <Card key={card.id} card={card} />
      );
    }
  }

  render() {
    return (
      <ScrollView style={ListStyles.listStyle} >
      {this.renderData()}
      </ScrollView>
    );
  }
}

//default file output sent for other files
export default List;
