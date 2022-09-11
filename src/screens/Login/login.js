import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Platform, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'
import { getLogin } from '../../redux/actions/loginAction'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployee } from '../../redux/actions/getAction'
import Icon from 'react-native-vector-icons/Feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(true)
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const { userDatas } = useSelector((state) => ({
        userDatas: state.loginReducer.userData,
    }))

    // console.log("the async storage from login ===>", AsyncStorage.getAllKeys().then((keys)=>{return keys}).then((a)=>console.log("the data is====>", a)))

    const data = userDatas !== undefined && userDatas !== null && userDatas !== ''
    

    const handleLogIn = () => {
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (name != '') {
            if (reg.test(name) !== false) {
                if (password != '') {
                    const data = {
                        userEmail: name,
                        userPassword: password
                    }
                    dispatch(getLogin(data))
                } else {
                    alert("Password field is not empty")
                }
            } else {
                alert("Email id is not correct")
            }
        } else {
            alert("Please enter your email")
        }
    }

    // console.log("the message===>", userDatas?.error?.message)

    useEffect(() => {
        if (userDatas !== []) {
            if (userDatas?.error?.message === "Plaintext credentials authentication is deprecated for new restlets.") {
                dispatch(getEmployee())
                navigation.navigate('welcome')
            } else {
                navigation.navigate('login')
            }
        }
    }, [userDatas])


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={styles.imageBackground}>
                <KeyboardAwareScrollView enableOnAndroid style={{ flex: 1 }}>
                    <ScrollView style={{}}>
                        <View style={styles.keyboardScroll}>
                            <View>
                                <Text style={[Textstyles.bold, styles.text]}>Welcome Back, Sign In!</Text>
                            </View>
                            <View style={styles.imageView}>
                                <Image source={require('../../../assets/images/login_logo.png')} style={styles.img} resizeMode='cover' />
                            </View>
                            <View style={styles.textInputView}>
                                <TextInput placeholder='Username' placeholderTextColor='#1b2041' style={[Textstyles.bold, styles.textinput]} autoCapitalize= 'none' value={name} onChangeText={(e) => setName(e)} keyboardType='email-address' />
                                <TextInput placeholder="Password" placeholderTextColor="#1b2041" secureTextEntry={show} style={[Textstyles.bold, styles.textinput]} value={password} onChangeText={(e) => setPassword(e)} />
                                {show ?
                                    <Icon size={22} name='eye' style={styles.iconDesign} onPress={() => setShow(false)} /> :
                                    <Icon size={22} name='eye-off' style={styles.iconDesign} onPress={() => setShow(true)} />
                                }
                            </View>
                            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('welcome')}> */}
                            <TouchableOpacity style={styles.button} onPress={() => handleLogIn()}>
                                <Text style={[Textstyles.bold, styles.signInText]}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageBackground: {
        flex: 1,
        justifyContent: 'center'
    },

    keyboardScroll: {
        flex: 1
    },

    imageView: {
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? '3%' : '5%'
    },

    img: {
        width: 180,
        height: 180
    },

    textInputView: {
        marginTop: '10%'
    },
    
    text: {
        fontSize: Platform.OS === 'ios' ? 20 : 28,
        color: '#1b2041',
        marginTop: '10%',
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
        marginTop: '5%',
        // marginBottom: Platform.OS === 'android' ? '100%' : null
    },
    iconDesign: {
        width: '10%',
        alignSelf: 'center',
        paddingLeft: 8,
        bottom: '22%',
        left: '34%'

    },

    signInText: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center'
    }

})
