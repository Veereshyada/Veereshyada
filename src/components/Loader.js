import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import COLORS from '../Constants/color';
import {useNavigation} from '@react-navigation/native';
const Loader = ({visible = false}) => {
  const navigation = useNavigation();
const asyStorage= async()=>{
  try {
    const value = await AsyncStorage.getItem('UserId')
    if(value !== null) {
      console.log(value,"loading screen------>")
      navigation.replace(value ? 'MainScreen' : 'Login');
    }
  } catch(e) {
    // error reading value
  }
}

useEffect(()=>{
asyStorage()
},[]);

  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={{marginLeft: 10, fontSize: 16,color:COLORS.skyblue,fontWeight:'500'}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;
