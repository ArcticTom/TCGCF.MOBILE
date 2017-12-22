import React from 'react';
import { Text, View } from 'react-native';
import ListItem from './ListItem';
import SetStyles from './SetStyles';

const Set = (props) => {
  return (
    <ListItem>
      <View style={SetStyles.itemStyle}>
        <Text style={SetStyles.keyruneStyle}></Text>
      </View>
      <View>
        <Text style={SetStyles.testStyle}>{props.set.name}</Text>
        <Text>{props.set.name}</Text>
        <View>
          <Text>{props.set.name}</Text>
        </View>
      </View>
    </ListItem>
  );
};

export default Set;
