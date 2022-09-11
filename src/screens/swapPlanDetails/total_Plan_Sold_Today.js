import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import COLORS from '../../constant/color'
import Header from '../../components/header';


const TotalPlanSoldToday = ({ navigation }) => {

    const Back = () => {
        navigation.navigate("Home1")
    }
    const Settings = () => {
        navigation.navigate("Settings")
    }
    const Notification = () => {
        navigation.navigate("Notifications")
    }
    const GoHome = () => {
        navigation.navigate("Home1")
    }

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:COLORS.skyblue }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{goBack:'arrow-back',goSettings:'settings',goNotifications:'notifications',goHome:'home'}}
            />
            <Text>hello this is TotalPlanSoldToday</Text>
        </SafeAreaView>
    )
}


export default TotalPlanSoldToday