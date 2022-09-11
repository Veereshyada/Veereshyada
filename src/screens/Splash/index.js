import { View, Image, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Images from '../../Utilities/images'
import Colors from '../../Utilities/color'

export default function Splash() {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(()=>{navigation.navigate("Home")},3000)
    }, [])
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.green} animated barStyle='default' networkActivityIndicatorVisible showHideTransition='slide' />
            <Image source={Images.splash} resizeMode='contain' style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.green
    },
    image:{
        height:'100%',
        width:'100%'
    }
})