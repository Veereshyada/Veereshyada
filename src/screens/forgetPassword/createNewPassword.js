import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'

const createNewPassword = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <Text style={[Textstyles.bold, styles.text]}>Create New Password</Text>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Image source={require('../../../assets/images/logo1.png')} style={{ alignSelf: 'center' }}></Image>
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput placeholderTextColor="#1b2041" placeholder="New Password" style={[Textstyles.bold, styles.textinput]}></TextInput>
                        <TextInput placeholderTextColor="#1b2041" placeholder="Confirm Password" style={[Textstyles.bold, styles.textinput]}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
                        <Text style={[Textstyles.bold, { color: '#FFF', fontSize: 20, alignSelf: 'center' }]}>SAVE</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 40, width: '70%', alignSelf: 'center' }}>
                        <Text style={[Textstyles.bold, { fontSize: 15, textAlign: 'center', color: "#1b2041" }]}>New password must be different from previously used password</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default createNewPassword

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
