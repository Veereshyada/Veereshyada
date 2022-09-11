import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../constant/color';
import Header from '../../components/header';
import BackgrounImg from '../../components/BackgroundImg';
import DriverSwapCard from '../../components/DriverSwapCard';
import Plans from '../../components/plans';
import AntDesign from "react-native-vector-icons/AntDesign";
import Button from '../../components/button';
import Images from '../../constant/imgurls';


const Payment = ({ navigation }) => {


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
    const  Validate=()=>{
        navigation.navigate("Plans")
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
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
                        <BackgrounImg screenName={"Guarantor Details"} />
                    </View>
                    <View style={{ width: '95%', alignSelf: 'center' }}>

                        <View style={{ paddingTop: 30, paddingVertical: 15, flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700', fontSize: 22, color: COLORS.white }}>Pay: INR 5000</Text>
                            <Text style={{ fontWeight: '700', fontSize: 22, color: COLORS.green }}> ₹</Text>
                        </View>
                        <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>Pay by Cash at EoD (Option to enabled from backend
                                for Credit Cases)</Text>
                        </View>
                        <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>Pay By Cash Later (Option to enabled from backend
                                for Credit Cases</Text>
                        </View>
                        <View style={{ borderBottomColor: COLORS.silver, borderBottomWidth: 2, marginTop: 20 }}>
                            <Text style={{ color: COLORS.white, fontSize: 18 }}>Wallets</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Image source={Images.paytm} style={{ width: 90, height: 50 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10, justifyContent: "center", alignItems: "center", marginTop: 10, height: 42, width: 42, backgroundColor: COLORS.white, alignSelf: 'center' }}>
                                <Image source={Images.airtel} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomColor: COLORS.silver, borderBottomWidth: 2, marginTop: 20 }}>
                            <Text style={{ color: COLORS.white, fontSize: 18 }}>UPI</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{ marginTop:10 }}>
                                <Image source={Images.bhim} style={{ width: 90, height: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10,marginLeft:20 }}>
                                <Image source={Images.upi} style={{ width: 60, height: 35 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Button
                                Style={{ width: '100%' }}
                                onPress={Validate}
                                title={'Pay Now'} />
                        </View>
                        <View style={{height:30}}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


})
export default Payment;