
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CustomHeader from "../../components/header";
import SwitchSelector from "react-native-switch-selector";
import { useTranslation } from 'react-i18next';
import COLORS from "../../Constants/color";

const options = [
    { label: 'English', value: 'en' },
    { label: 'हिंदी', value: 'hi' }
];

const Settings = ({ navigation }) => {

    const { t, i18n } = useTranslation();
    function selectLanguage() {
        if (i18n.language == 'en') {
            return 0;
        } else if (i18n.language == 'hi') {
            return 1;
        }
    }

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
                HeadingName={t("Settings")}
                imageSize={{ bgWidth: '100%',bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '45%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <View style={{ flex: 1,backgroundColor:COLORS.skyblue }}>
                <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold', color: 'white' }}>{t('languageSelector')}</Text>
                <SwitchSelector
                    backgroundColor={COLORS.white}
                    buttonColor={COLORS.green}
                    textStyle={{ fontSize: 15, color: COLORS.skyblue }}
                    selectedTextStyle={{ fontSize: 18, fontWeight: '700' }}
                    options={options} haspadding initial={selectLanguage()}
                    onPress={(language) => {
                        i18n.changeLanguage(language);
                    }}
                    style={{ margin: 20 }}
                />
            </View>

        </SafeAreaView>
    )
}


const Styles = StyleSheet.create({
    PlanContainner: {
        padding: 10
    },
    PlanSubContainner:
    {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    Plans: {
        backgroundColor: '#F9F9F9',
        paddingVertical: 15,
        paddingHorizontal: '9%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4%'
    }
})

export default Settings;