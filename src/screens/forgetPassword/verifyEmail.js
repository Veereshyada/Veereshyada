import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'

const verifyEmail = () => {

    const navigation = useNavigation()

    return (
        <View>

            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <Text style={[Textstyles.bold, styles.text]}>Verify Your Email</Text>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Image source={require('../../../assets/images/logo1.png')} style={{ alignSelf: 'center' }}></Image>
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput placeholder="Temporary Password" placeholderTextColor="#1b2041" style={[Textstyles.bold, styles.textinput]}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('createNewPassword')}>
                        <Text style={[Textstyles.bold, { color: '#FFF', fontSize: 20, alignSelf: 'center' }]}>VERIFY</Text>
                    </TouchableOpacity>


                    <View style={{ alignSelf: 'center', marginTop: 30, width: '70%' }}>
                        <Text style={[Textstyles.normal, { fontSize: 15, textAlign: 'center', color: "#1b2041" }]}>Please enter the temporary password that was sent to ( email address )</Text>
                    </View>


                    <View style={{ alignSelf: 'center', marginTop: 40 }}>
                        <Text style={[Textstyles.normal, { fontSize: 15, textAlign: 'center', color: "#1b2041" }]}>Resend Code?</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default verifyEmail

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#1b2041',
        marginTop: '5%',
        textAlign: 'center',
    },

    textbottom: {
        fontSize: 15,
        color: '#1b2041',
        marginTop: '1%',
        textAlign: 'center',
    },

    textinput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        width: "80%",
        alignSelf: 'center',
        marginTop: "5%",
        padding: 10,
    },

    button: {
        alignSelf: 'center',
        backgroundColor: '#1b2041',
        borderRadius: 10,
        width: '80%',
        height: 45,
        textAlignVertical: 'center',
        paddingVertical: '2%',
        marginTop: '5%'
    }
})
