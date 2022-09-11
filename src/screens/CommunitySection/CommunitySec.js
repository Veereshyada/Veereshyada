import React ,{useState,useEffect}from "react";
import { View, Text, SafeAreaView, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import COLORS from "../../Constants/color";
import CustomHeader from "../../components/header";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommunitySection = ({navigation}) => {
 const {t} =useTranslation();
 const [DriverName,setdriverName]=useState('');

 const hello = t('welcom');
 const { getOTP } = useSelector((state) => ({
    getOTP: state.loginReducer.getOTP,
}))
    const Back = () => {
        navigation.navigate("Home1")
    }
    const Settings = () => {
        navigation.navigate("Settings")
    }
    const Notification = () => {
        navigation.navigate("Notification")
    }
    const GoHome = () => {
        navigation.navigate("Home1")
    }

    const userInfo = async () => {
        try {
            const DriverInfo = await AsyncStorage.getItem('DriverInfo');
            console.log('===========================================>   ', DriverInfo);
            const val = JSON.parse(DriverInfo);
            setdriverName(val.data.driver)
        } catch (e) {
            console.log(e,'error');
        }
    };
    useEffect(() => {
        setTimeout(() => {
            userInfo();
        }, 2000);
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={hello + `  ${DriverName}`}
                imageSize={{ bgWidth: '106%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '30%', marginLeft: '-20.5%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS=='android'?'71.5%':'68%'}}
            />
            <ScrollView 
            showsVerticalScrollIndicator={false
            }
            style={{ width: '100%',padding:'5%', alignSelf: 'center',flex:1,backgroundColor:COLORS.skyblue }}>
                <TouchableOpacity 
                // onPress={()=>navigation.navigate('HeroOfMonth')}
                style={Style.Contenner}>
                    <Text style={Style.txt}>{t('hero_of_month')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                // onPress={()=>navigation.navigate('HeroOfMonth')}
                style={Style.Contenner}>
                    <Text style={Style.txt}>{t('Other_Community_Page')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                // onPress={()=>navigation.navigate('HeroOfMonth')}
                style={Style.Contenner}>
                    <Text style={Style.txt}>{t('Other_Community_Page')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                // onPress={()=>navigation.navigate('HeroOfMonth')}
                style={Style.Contenner}>
                    <Text style={Style.txt}>{t('Other_Community_Page')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const Style=StyleSheet.create({
    Contenner:
    {
        marginTop:10,
        height:90,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.white
    },
    txt:
    {
        fontWeight:'700',
        fontSize:17,
        color:'black'

    }
})

export default CommunitySection;