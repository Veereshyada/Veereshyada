import React from "react";
import {View,Text,Image,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/header";
import Button from "../../components/Button";
import COLORS from "../../Constants/color";
import { useTranslation } from "react-i18next";

const ComplantRaiseSuccess = ({ navigation }) => {
    const { t } = useTranslation();
    const Back = () => {
        navigation.navigate("Raise Services")
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
                HeadingName={t('Succesfull_Raised')}
                imageSize={{ bgWidth: '107%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '35%', marginLeft: '-21%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: COLORS.white, width: '90%', alignSelf: 'center', borderRadius: 15, marginTop: 40, paddingVertical: 30 }}>
                    <Image
                        source={require("../../assets/Success.png")}
                        style={{ width: 100, height: 100, }}
                    />
                    <Text style={{ color: "green", fontSize: 17, fontWeight: '500' }}>
                        {t('Successful_Raised_ther_Service_Request')}
                    </Text>
                    <Text style={{ fontWeight: "700", paddingTop: 15 }}>{t('srno')}: SR202</Text>
                    <Text style={{ fontWeight: "700", paddingTop: 10 }}>
                        {t('sr_for_battery')}
                    </Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Button
                        Style={'20%'}
                        title={t("back")}
                        onPress={Back}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ComplantRaiseSuccess;
