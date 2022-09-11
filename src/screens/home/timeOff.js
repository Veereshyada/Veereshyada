import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Footer from '../../../assets/footer/footer'
import Textstyles from '../../../assets/text/texts'

const timeOff = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>

                </ScrollView>
                <View style={{ backgroundColor: "#fff", height: 150, width: '100%', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                    <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '60%' }]}>Time Off Activity</Text>
                        <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20 }]}>1 Pending</Text>
                    </View>

                    <View style={{ top: '10%' }}>
                        <TouchableOpacity style={{ backgroundColor: '#1b2041', height: 50, width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                            <Text style={[Textstyles.bold, { color: '#fff', fontSize: 20, textAlign: 'center', marginTop: '3%' }]}>REQUEST TIME OFF</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Footer />
            </ImageBackground>
        </View>
    )
}

export default timeOff

const styles = StyleSheet.create({})
