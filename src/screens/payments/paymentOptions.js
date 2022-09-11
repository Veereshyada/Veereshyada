import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/header";
import COLORS from "../../Constants/color";
import { useTranslation } from "react-i18next";

const PaymentOption = ({ navigation }) => {
    const {t} =useTranslation();
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
    const TotalAmmount = () => {
        return (
            <View style={{ width: "100%",paddingTop:10 }}>
                <Text
                    style={{ fontSize: 20, color: COLORS.skyblue, fontWeight: "600",textAlign:'center' }}
                >
                   {t("pay")}{'  '} {`₹${500}`}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                PaymentOption={TotalAmmount()}
                HeadingName={t("paywalletoption")}
                
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '45%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 120, VimageHeight: 62, VimageWidth: '70%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS=='android'?'71.5%':'68%' }}
            />
            <ScrollView style={{ width: '100%',padding:'5%', alignSelf: 'center',backgroundColor:COLORS.skyblue }}>
                <Text style={Styles.TexStyle}>{t("wallet")}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PaymentError')}
                        // onPress={() => Linking.openURL('http://api.whatsapp.com/')}
                        style={{ width: '40%', height: 75, backgroundColor: '#F9F9F9', margin: 10, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/Pyatm.png')} style={{ height: 50, width: 50, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PaymentSuccess')}
                        // onPress={() => Linking.openURL('http://api.whatsapp.com/')}
                        style={{ width: '40%', height: 75, backgroundColor: '#F9F9F9', margin: 10, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/Airtel.png')} style={{ height: 50, width: 50, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.TexStyle}>{t("upi")}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('http://api.whatsapp.com/')
                        }
                        style={{ width: '40%', height: 75, backgroundColor: '#F9F9F9', margin: 10, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/upi.png')} style={{ height: 66, width: 70, borderRadius: 10,alignSelf:'center' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('http://api.whatsapp.com/')
                        }
                        style={{ width: '40%', height: 75, backgroundColor: 'white', margin: 10, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#003B4D', fontSize: 17, fontWeight: '500',fontStyle:"italic"}}>{t("other_upi")}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, marginTop: 30 }}>
                    <Text style={{ color: COLORS.white, fontWeight: '700', marginTop: 10, fontSize: 18 }}>{t("Total_Payable")}</Text>
                    <Text style={{ marginLeft: '50%', color: COLORS.white, fontWeight: '700', marginTop: 10, fontSize: 18 }}>₹400</Text>
                </View>
            </ScrollView>
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
    TexStyle: {
        paddingVertical: 5, textTransform: 'uppercase', fontSize: 18, fontWeight: '700', color: COLORS.white
    }
})

export default PaymentOption;