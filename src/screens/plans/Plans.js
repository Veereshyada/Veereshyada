import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import COLORS from '../../constant/color';
import Header from '../../components/header';
import DriverCard from '../../components/cardDriver';
import BackgrounImg from '../../components/BackgroundImg';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/button';
const Plans = ({ navigation }) => {


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
    const gotoPlans=()=>{
        navigation.navigate("ChooseAplan")
    }
    const validate=()=>{
        navigation.navigate('Home2')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <BackgrounImg screenName={"Do Swap Transaction"} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <DriverCard />
                </View>
                <View style={{ paddingTop: 30,paddingBottom:10 }}>
                    <Text style={{ alignSelf: 'center',fontWeight:'700',fontSize:18,color:COLORS.white }}>Payment to be Taken from Driver : 0</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Button
                        onPress={gotoPlans}
                        title={"Buy a Plan"}
                        Style={{ width: '95%', margintop: 0 }}
                    />
                    <Button
                        onPress={validate}
                        title={"Only Submit Battery"}
                        Style={{ width: '95%', margintop: 10 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Plans