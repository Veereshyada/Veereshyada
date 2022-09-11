import React, { useState } from "react";
import { View,Image, StyleSheet,Button, Touchable,Text, TouchableOpacity} from "react-native";
//import ImagePicker from 'react-native-image-picker';
const UploadPhoto =({style,onPress=() => {}},nam)=>{
    
   
    return(
       
            <TouchableOpacity onPress={() => {onPress()}}>
            <Image source={require('../assets/imgs/uploadimg.png')} style={[styles.upimgtext,style]} />
            </TouchableOpacity>
    
       
        //    
       
    )
}
 const styles = StyleSheet.create({
  upimgtext:{
    borderRadius:10,width:60,height:60
  }
   
 })
 export default UploadPhoto;
