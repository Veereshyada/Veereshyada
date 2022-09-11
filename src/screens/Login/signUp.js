import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'

const signUp = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <Text style={[Textstyles.bold, styles.text]}>Hello, Sign Up!</Text>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Image source={require('../../../assets/images/logo1.png')} style={{ alignSelf: 'center' }} resizeMode='cover'></Image>
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput placeholderTextColor="#1b2041" placeholder="Username" style={[Textstyles.bold, styles.textinput]}></TextInput>
                        <TextInput placeholderTextColor="#1b2041" placeholder="Email" style={[Textstyles.bold, styles.textinput]}></TextInput>
                        <TextInput placeholderTextColor="#1b2041" placeholder="Password" style={[Textstyles.bold, styles.textinput]}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
                        <Text style={[Textstyles.bold, { color: '#FFF', fontSize: 20, alignSelf: 'center' }]}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default signUp

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#1b2041',
        marginTop: '8%',
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
    }
})
