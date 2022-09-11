import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Footer from '../../../assets/footer/footer'
import Textstyles from '../../../assets/text/texts'

const Projects = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>

                    <TouchableOpacity style={{ alignSelf: 'center', height: 50, width: 80, borderRadius: 10, backgroundColor: "green", borderColor: "black", borderWidth: 1, marginTop: 20 }}
                        onPress={() => navigation.navigate("projectList")}>
                        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 12, color: "black" }}>NEXT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: 'center', height: 50, width: 120, borderRadius: 10, backgroundColor: "green", borderColor: "black", borderWidth: 1, marginTop: 20 }}
                        onPress={() => navigation.navigate("projectOverlay")}>
                        <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 12, color: "black" }}>Project Overlay</Text>
                    </TouchableOpacity>

                </ScrollView>
                <View style={{ backgroundColor: "#fff", height: 150, width: '100%', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                    <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '70%' }]}>Current Project</Text>
                        <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '30%' }]}>Project ID</Text>
                    </View>

                    <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '70%' }]}>Project List</Text>
                        <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '30%' }]}>5 active</Text>
                    </View>
                </View>

                <Footer />
            </ImageBackground>
        </View>
    )
}

export default Projects

const styles = StyleSheet.create({})
