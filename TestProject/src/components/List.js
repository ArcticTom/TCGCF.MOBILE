import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ListStyles from './ListStyles';
import Set from './Set';

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
        <Set key={set.id} set={set} />
      );
    } else if (this.props.type === 'card') {
      return this.state.data.map(card =>
        <Set key={card.id} card={card} />
      );
    }
  }

  render() {
    return (
      <View style={ListStyles.listStyle} >
      {this.renderData()}
      </View>
    );
  }
}

//default file output sent for other files
export default List;
