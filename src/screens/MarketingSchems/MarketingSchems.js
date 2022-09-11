import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import CustomHeader from '../../components/header';
import COLORS from '../../Constants/color';
import { useTranslation } from "react-i18next";

const MarketingSchems = ({ navigation }) => {
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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("Marketing_Schemes_header")}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-26%", MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <View style={{ marginTop: 10 }}>
                <Text style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:'700',marginTop:60}}>{t("marketingScheme1")}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default MarketingSchems;