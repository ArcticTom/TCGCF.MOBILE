import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonStyles from './ButtonStyles';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyles.buttonStyle}>
      <Text style={ButtonStyles.textStyle}>
        Click me!
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
