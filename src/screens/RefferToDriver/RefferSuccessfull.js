import React from "react";
import { View, Text,Image,ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/header";
import COLORS from "../../Constants/color";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";



const DriveRefferSuccess = ({ navigation,route }) => {
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
    const goBack = () => {
        navigation.navigate("Refer a Driver")
    }
    console.log(route);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("succes_sub")}
                imageSize={{ bgWidth: '120%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '10%', marginLeft: -9, MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 20, backgroundColor: COLORS.white, borderRadius: 15, marginTop: 30 }}>
                        <Image source={require('../../assets/Success.png')} style={{ width: 100, height: 100, margin: 20 }} />
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: '600' }}>{t("succes_sub_driver")}</Text>
                        <Text style={{ fontSize: 17, fontWeight: '700', color: 'green', paddingVertical: 20 }}>{t("Driver_Ref_ID")} {route.params.no}</Text>
                        <Text style={{ color: 'green', fontWeight: '500', fontSize: 16, textAlign: 'center', lineHeight: 20 }}>{t("paysucsstext")}</Text>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center',marginTop:45 }}>
                        <Button
                            title={'Back'}
                            Style={'5%'}
                            onPress={goBack}
                        />
                    </View>
                    <View style={{height:20}}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default DriveRefferSuccess;