import React, { useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import COLORS from '../constant/color';


const AddChild = ({male,count,onPress1=() => {}},onPress2=() => {},)=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.add}>{male}</Text>
            <Text style={styles.add}onPress={() => {onPress2()}}>-</Text>
            <Text style={styles.add}>{count}</Text>
            <Text style={styles.add} 
            onPress={() => {onPress1()}}>+</Text>
         </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:"flex-start",
        width:'30%',
        height:50,
        backgroundColor:COLORS.white,
        borderRadius:5,
        padding:10,
        marginTop:'5%'
    },
    add:{
        fontSize:25,color:'gray',
        marginLeft:5
    }
    

})

export default AddChild;