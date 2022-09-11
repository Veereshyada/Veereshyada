import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/header";
import COLORS from "../../Constants/color";
import { useTranslation } from "react-i18next";

const PaymentSuccessFull = ({ navigation }) => {
    const { t } = useTranslation();
    const Back = () => {
        navigation.navigate("Buy a Plan")
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("paymentsuccessful")}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight:35, viewHeight: 2.5, viewWidth: '48%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', alignSelf: 'center', backgroundColor: COLORS.white, marginTop: 80, padding: 20, borderRadius: 20 }}>
                    <Image source={require('../../assets/Success.png')} style={{ width: 100, height: 100, margin: 20 }} />
                    <Text style={{ color: 'green', fontWeight: '700', fontSize: 20 }}>{t("bhuktan")} ₹ 520</Text>
                    <Text style={{ color: 'green', fontSize: 15 }}>{t("transactionsuccessful")}</Text>
                    <Text style={{ color: 'green', fontWeight: '500', fontSize: 17 }}>{t("swapenable")}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    header: {
        // justifyContent:"center",
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 10
    },
})
export default PaymentSuccessFull;