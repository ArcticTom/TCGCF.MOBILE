import React from 'react';
import { Text, View, Image } from 'react-native';
import HeaderStyles from './HeaderStyles';

const remote = 'http://cartamundi.com/wp-content/uploads/2016/01/iso800-Cartamundi-november-2015-2970-1024x683.jpg';

//create a header component
const Header = (props) => {
  const { textStyle, viewStyle, imageViewStyle, imageStyle, textViewStyle } = HeaderStyles;

    return (
      <View style={viewStyle} >
        <View style={imageViewStyle} >
          <Image style={imageStyle} source={{ uri: remote }} />
        </View>
        <View style={textViewStyle} >
          <Text style={textStyle} >
          {props.headerText}
          </Text>
        </View>
      </View>
    );
};

//default file output sent for other files
export default Header;
