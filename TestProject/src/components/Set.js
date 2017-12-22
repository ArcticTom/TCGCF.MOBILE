import React from 'react';
import { Text, View } from 'react-native';
import ListItem from './ListItem';
import SetStyles from './SetStyles';

const Set = ({ set }) => {
  const { runeViewStyle, keyruneStyle, textViewStyle, titleStyle,
    iconViewStyle, iconStyle, textStyle } = SetStyles;

  const { name, id } = set;

  return (
    <ListItem>
      <View style={runeViewStyle}>
        <Text style={keyruneStyle}></Text>
      </View>
      <View style={textViewStyle}>
        <Text style={titleStyle}>{name}</Text>
        <Text>{id}</Text>
        <View style={iconViewStyle}>
          <Text style={iconStyle}></Text>
          <Text style={textStyle}>{name}</Text>
          <Text style={iconStyle}></Text>
          <Text style={textStyle}>{name}</Text>
        </View>
      </View>
    </ListItem>
  );
};

export default Set;
