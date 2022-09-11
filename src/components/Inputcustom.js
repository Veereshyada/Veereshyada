import React, {Component} from 'react';
import {TextInput, View, Tex,StyleSheet} from 'react-native';

const Inputcustom = ({inputvalue, ipOnChangeText, placeholder,style}) => {
    const {inputStyle} = styles;
    return(
            <TextInput 
           autoCorrect={false}
           placeholder={placeholder}
           style= {[inputStyle,style]}
           />
       
    );
 }

 
 const styles = StyleSheet.create({
    inputStyle:{
        color: 'black',
        fontWeight:"bold",
        fontSize: 16,
        width:"60%",
        height:50, 
        backgroundColor:"#fff", 
        borderRadius:10,
        paddingLeft:20,
        marginLeft:30
    }
 })

 export default Inputcustom;