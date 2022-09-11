import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Linking, Image,ScrollView } from 'react-native';
import CustomHeader from '../../components/header';
import COLORS from '../../Constants/color';
import Button from '../../components/Button';
import { useTranslation } from "react-i18next";

const Complaints = ({ navigation }) => {
    const { t } = useTranslation();

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
    const makeCall = () => {
        Linking.openURL(`tel:${18001230181}`)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t('Raise_a_Complaint1')}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: "30%", lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: '-25.5%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Raise Services")}
                    style={Styles.RaiseReqs}>
                    <Image source={require("../../assets/VIewSR.png")} style={{ height: 40, width: 40 }} />
                    <Text style={Styles.text}>{t('Raise_Service_Request')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Sr Status")}
                    style={Styles.RaiseReqs}>
                    <Image source={require("../../assets/RaiseService.png")} style={{ height: 40, width: 40 }} />
                    <Text style={Styles.text}>{t('View_SR_Status')}</Text>
                </TouchableOpacity>
                {/* </View> */}
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Button
                        onPress={makeCall}
                        title={t("helpline")}
                        Style={'30%'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({

    Header: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: 'row',
    },
    RaiseReqs:
    {
        width: '90%',
        marginTop: 30,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.green,
        backgroundColor: COLORS.green,
        alignSelf: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text:
    {
        fontWeight: '700',
        fontSize: 18,
        paddingLeft: 15,
        color: COLORS.white,
    },
    Heading:
    {
        fontWeight: '700',
        fontSize: 17,
        color: '#003B4D'
    }
})

export default Complaints;