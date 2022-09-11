import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'

const email = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <Text style={[Textstyles.bold, styles.text]}>Forget Your Password?</Text>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Image source={require('../../../assets/images/logo1.png')} style={{ alignSelf: 'center' }}></Image>
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput placeholderTextColor="#1b2041" placeholder="Email" style={[Textstyles.bold, styles.textinput]}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('verifyEmail')}>
                        <Text style={[Textstyles.bold, styles.sendBtnText]}>SEND</Text>
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center', marginTop: 30, width: '70%' }}>
                        <Text style={[styles.textbottom, Textstyles.normal]}>Temporary password will be sent to verify your email address.</Text>
                    </View>

                    <View style={{ alignSelf: 'center', marginTop: 40 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("login")}>
                            <Text style={[styles.textbottom, Textstyles.bold]}>Remember Password?, <Text style={{ color: 'red' }}>Sign in</Text></Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default email

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
        textAlignVertical: 'center',
        height: 45,
        paddingVertical: '2%',
        marginTop: '5%'
    },
    bottomText: {
        fontSize: 15,
        textAlign: 'center',
        color: "#1b2041"
    },
    sendBtnText: {
        color: '#FFF',
        fontSize: 20,
        alignSelf: 'center',
    }
})
