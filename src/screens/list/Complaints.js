import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../constant/color';
import Header from '../../components/header';
import BackgrounImg from '../../components/BackgroundImg';
import DriverSwapCard from '../../components/DriverSwapCard';
import Button from '../../components/button';
import Plans from '../../components/plans';
import AntDesign from "react-native-vector-icons/AntDesign";
import DoSwapTransaction from '../DoSwapTransaction.js/DoswapTransaction';

const Complaints = ({ navigation }) => {


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
    const gotoPay = () => {
        navigation.navigate("Payment")
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                {/* <Header
                    onPressNotification={Notification}
                    onPressHome={GoHome}
                    onPressSetting={Settings}
                    onPressBack={Back}
                    Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
                /> */}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <DoSwapTransaction />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Palns: {
        height: 290,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        borderRadius: 15,
        alignSelf: 'center',
        width: '95%',
        alignItems: "center",
    },
    swapPlans: {
        backgroundColor: COLORS.green,
        width: '42%',
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 10,
    },
    differPlans: {
        flexDirection: "row",
        paddingVertical: 5,
        alignSelf: 'center'
    },
    days: {
        backgroundColor: COLORS.white,
        width: '30%',
        paddingVertical: 5,
        borderColor: COLORS.silver,
        borderWidth: 1,
        marginHorizontal: '0.5%',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5
    }


})
export default Complaints