import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../constant/color';

const Button = ({title, onPress = () => {},Style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        backgroundColor:COLORS.green,
        // marginTop:30,
        height:45,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        width:Style.width,
        alignSelf:'center',
        marginTop:Style.margintop,
        padding:10
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
