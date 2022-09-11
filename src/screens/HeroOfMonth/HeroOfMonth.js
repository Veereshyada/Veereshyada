import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import COLORS from "../../Constants/color";
import CustomHeader from "../../components/header";
import { useTranslation } from "react-i18next";

const HeroOfMonth = ({ navigation }) => {
    const { t } = useTranslation();
    const Back = () => {
        navigation.navigate("Community Section")
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
                HeadingName={t("hero_of_month")}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '45%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', alignSelf: 'center', marginBottom: 10, padding: '5%', backgroundColor: COLORS.skyblue,flex:1 }}>
                <View style={{ height: 210, backgroundColor: COLORS.white, borderRadius: 15, marginBottom: 10, padding: 20 }}>
                    <Image source={require('../../assets/hero.png')} style={{ width: 100, height: 140, alignSelf: 'center' }} />
                    <Text style={{ textTransform: 'uppercase', fontWeight: '600', fontSize: 18, color: COLORS.skyblue, alignSelf: 'center', paddingTop: 20, }}>{t('hero_of_month')}</Text>
                </View>
                <View style={Style.infoContainner}>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>{t('driverid')}</Text>
                    </View>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>888</Text>
                    </View>



                </View>
                <View style={Style.infoContainner}>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>{t('nam')}</Text>
                    </View>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>Mr.XYZ</Text>
                    </View>


                </View>
                <View style={Style.infoContainner}>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>{t('swap')}</Text>
                    </View>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>75</Text>
                    </View>
                </View>
                <View style={Style.infoContainner}>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>{t('won')}</Text>
                    </View>
                    <View style={Style.SubConten}>
                        <Text style={Style.txt}>INR 5000</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const Style = StyleSheet.create({
    infoContainner: {
        backgroundColor: COLORS.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 5,
        padding: 15,
        borderRadius: 10
    },
    txt: {
        paddingHorizontal: 30,
        fontWeight: '500',
        fontSize: 17,
        color: COLORS.white,

    },
    SubConten:
    {
        width: '50%'
    }
})
export default HeroOfMonth;