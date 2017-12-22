import React from 'react';
import { View } from 'react-native';
import ListItemStyles from './ListItemStyles';

const ListItem = (props) => {
  return (
    <View style={ListItemStyles.listStyle}>
    {props.children}
    </View>
  );
};

export default ListItem;
