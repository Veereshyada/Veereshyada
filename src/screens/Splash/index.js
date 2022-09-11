import { View, Image, StatusBar, StyleSheet, TouchableOpacity,Text,Dimensions,BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../../Constants/color'
const windowWidth = Dimensions.get('window').width;

export default function Splash() {
    const navigation = useNavigation()

    useEffect(()=> {
        async function  goto(){
            setTimeout(()=>{navigation.navigate("Login")},2000)
        }
        goto()
    }, [])
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.green} animated barStyle='default' networkActivityIndicatorVisible showHideTransition='slide' />
            <Image source={require('../../assets/SPLASH.png')} resizeMode='contain' style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.skyblue
    },
    image:{
        height:'100%',
        width:windowWidth
    }
})