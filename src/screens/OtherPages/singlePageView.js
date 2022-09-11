import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import COLORS from "../../Constants/color";
import CustomHeader from "../../components/header";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SinglePageView = ({ navigation }) => {
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
                HeadingName={'Single Page View'}
                imageSize={{ bgWidth: '110%', bgHeight: 40, lineWidth: 50, lineHeight: 35, viewHeight: 2.5, viewWidth: '30%', marginLeft: '-14%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 30 }}>
                    <View style={{ height: 250, backgroundColor: COLORS.white, borderRadius: 15, marginBottom: 10, padding: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="car-battery" size={70} color={COLORS.green} />
                        <Text style={{ textTransform: 'uppercase', fontWeight: '600', fontSize: 16, color: COLORS.black, alignSelf: 'center', paddingTop: 10, }}>{`Code        888`}</Text>
                        <Text style={{ fontSize: 16, lineHeight: 20, textAlign: 'center', paddingTop: 30 }}>{t("things_static_content")}</Text>
                    </View>
                    <Button
                        title={'Back'}
                        onPress={GoHome}
                        Style={'30%'}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SinglePageView;