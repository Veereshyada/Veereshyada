import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../footer/footer'
import HeaderMain from '../headers/HeaderMain'
// change the address for background image, footer and other images before using

const boilerPlate = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain />
                <ScrollView style={{ flexGrow: 1 }}>
                </ScrollView>
                <Footer />
            </ImageBackground>
        </View>
    )
}

export default boilerPlate

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    }
})
