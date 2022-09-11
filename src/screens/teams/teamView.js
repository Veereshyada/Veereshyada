import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import AccordianPic from '../../../assets/accordian/AccordianPic'
import Textstyles from '../../../assets/text/texts'

// change the address for background image, footer and other images before using

const teamView = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <HeaderMain name="Team" />

                    <View style={{ marginTop: '2%'}}>
                        <AccordianPic backgroundColor='#73bf74' Name="Cheri Oteri" designation="Consultant; CTR" alert="No Alert" />
                        <AccordianPic backgroundColor='#73bf74' Name="Mayank Vashistha" designation="System Admin; FT" alert="2 Alert" />
                        <AccordianPic backgroundColor='#73bf74' Name="Full Name" designation="Researcher; PT" alert="7 Alert" />
                        <AccordianPic backgroundColor='#73bf74' Name="Full Name" designation="Title; Status" alert="Alerts" />
                        <AccordianPic backgroundColor='#73bf74' Name="Full Name" designation="Researcher; PT" alert="7 Alert" />
                        <AccordianPic backgroundColor='#73bf74' Name="Full Name" designation="Title; Status" alert="Alerts" />
                    </View>
                </ScrollView>
                {/* <TouchableOpacity style={{ width: 300, height: 50, borderRadius: 10, backgroundColor: "#1b2041", position: 'absolute', bottom: 80, alignSelf: 'center' }}>
                    <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 27, marginTop: 10 }]}>ADD EMPLOYEE</Text>
                </TouchableOpacity> */}
                <Footer btnName="ADD EMPLOYEE"/>
            </ImageBackground>
        </View>
    )
}

export default teamView

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
