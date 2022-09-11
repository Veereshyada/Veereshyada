import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Footer from '../../../assets/footer/footer'
import ProjectAcordianID from '../../../assets/accordian/ProjectAccordianID'
import Textstyles from '../../../assets/text/texts'

// change the address for background image, footer and other images before using

const projects = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                {/* <Header title="PROJECTS" /> */}
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ marginTop: '5%' }}>
                        <ProjectAcordianID backgroundColor='#73bf74' month="July" date='01' companyName='Widgets R Us' projectID='ID: WID555' />
                        <ProjectAcordianID backgroundColor='#73bf74' month="July" date='14' companyName='XYZ Parts Inc.' projectID='ID: XYZ144' />
                        <ProjectAcordianID backgroundColor='#d6a744' month="June" date='06' companyName='Best Venture Partners' projectID='ID: BVP623' />
                        <ProjectAcordianID backgroundColor='#b53535' month="May" date='27' companyName='Westvleteren' projectID='ID: WES120' />
                    </View>
                </ScrollView>

                <TouchableOpacity style={{ width: 300, height: 50, borderRadius: 10, backgroundColor: "#1b2041", position: 'absolute', bottom: 80, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('teamView')}>
                    <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 27, marginTop: 10 }]}>ADD NEW PROJECT</Text>
                </TouchableOpacity>

                <Footer />
            </ImageBackground>
        </View>
    )
}

export default projects

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
