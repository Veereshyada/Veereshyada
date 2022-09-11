import React from "react";
import { View,TouchableOpacity,Text } from 'react-native';
import COLORS from "../constant/color";



const Plans=({Bgcolor,title,onpress=()=>{ }})=>{

    return(
        <TouchableOpacity 
        onPress={onpress}
        style={{backgroundColor:Bgcolor,width:'20%',paddingVertical:5,borderColor:COLORS.silver,borderWidth:1,marginHorizontal:'0.2%',justifyContent:'center',alignItems:'center',paddingHorizontal:5,borderRadius:5}}>
            <Text style={{textAlign:'center',color:COLORS.black,fontWeight:'500'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Plans;