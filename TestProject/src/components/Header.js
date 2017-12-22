import React from 'react';
import { Text, View, Image } from 'react-native';
import HeaderStyles from './HeaderStyles';

//create a header component
const Header = ({ headerImg, headerText }) => {
  const { textStyle, viewStyle, imageViewStyle, imageStyle, textViewStyle } = HeaderStyles;

    return (
      <View style={viewStyle} >
        <View style={imageViewStyle} >
          <Image style={imageStyle} source={{ uri: headerImg }} />
        </View>
        <View style={textViewStyle} >
          <Text style={textStyle} >
          {headerText}
          </Text>
        </View>
      </View>
    );
};

//default file output sent for other files
export default Header;
