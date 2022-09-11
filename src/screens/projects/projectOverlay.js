import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Footer from '../../../assets/footer/footer'
import Textstyles from '../../../assets/text/texts'

const projectOverlay = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>

                </ScrollView>
                <View style={{ backgroundColor: "#fff", height: 200, width: '100%', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                    <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '60%' }]}>Team </Text>
                        <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '40%' }]}>8 of Members</Text>
                    </View>

                    <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '70%' }]}>Projects</Text>
                        <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '30%' }]}>15 active</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '4%' }}>
                        <View style={{ width: '50%', alignSelf: 'center' }}>
                            <TouchableOpacity style={{ width: '80%', height: 50, borderRadius: 10, backgroundColor: "#1b2041", alignSelf: 'center' }}>
                                <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 12 }]}>ADD PROJECT</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ width: '80%', height: 50, borderRadius: 10, backgroundColor: "#1b2041", alignSelf: 'center' }}>
                                <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 12 }]}>ADD EMPLOYEE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Footer />
            </ImageBackground>
        </View>
    )
}

export default projectOverlay

const styles = StyleSheet.create({})
