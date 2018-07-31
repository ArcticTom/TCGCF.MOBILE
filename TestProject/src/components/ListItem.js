import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ListItemStyles from './ListItemStyles';

const ListItem = (props, { onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={ListItemStyles.listStyle}>
        {props.children}
        </View>
    </TouchableOpacity>
  );
};

export default ListItem;
