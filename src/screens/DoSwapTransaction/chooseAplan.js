import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../constant/color';
import Header from '../../components/header';
import BackgrounImg from '../../components/BackgroundImg';
import DriverSwapCard from '../../components/DriverSwapCard';
import Button from '../../components/button';
import Plans from '../../components/plans';
import AntDesign from "react-native-vector-icons/AntDesign";

const ChooseAplan = ({ navigation }) => {


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
    const gotoPay=()=>{
        navigation.navigate("DoswapTransact")
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
                        <BackgrounImg screenName={"Choose A Plan"} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <DriverSwapCard
                            driverName={"Hemant Kumar"}
                            LastPersentDetail={"31-05-2022"}
                            PendingPenality={"300"}
                            dicount={"10"} />
                    </View>
                    <View style={{ paddingTop: 30, paddingBottom: 10 }}>
                        <Text style={{ alignSelf: 'center', fontWeight: '700', fontSize: 22, color: COLORS.white }}>Applicable Plan</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.Palns}>
                            <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 10, justifyContent: 'center' }}>
                                <TouchableOpacity style={[styles.swapPlans, { marginRight: '7%' }]}>
                                    <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>SWAP PLANS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.swapPlans, { marginLeft: '7%', backgroundColor: COLORS.skyblue, flexDirection: 'row' }]}>
                                    <Text style={{ fontWeight: '500', fontSize: 16, color: COLORS.white }}>KM PLANS</Text>
                                    <AntDesign name='down'
                                        style={{ color: COLORS.white, fontSize: 20,fontWeight:'700',marginLeft:7 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', marginTop: 10, }}>
                                <View style={styles.differPlans}>
                                    <TouchableOpacity style={[styles.days, { backgroundColor: COLORS.green }]}>
                                        <Text style={{ color: COLORS.black, fontWeight: '500' }}>DAILY</Text>
                                    </TouchableOpacity>
                                    <Plans
                                        onpress={gotoPay}
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.green}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />

                                </View>
                                <View style={styles.differPlans}>
                                    <TouchableOpacity style={styles.days}>
                                        <Text style={{ color: COLORS.black, fontWeight: '500' }}>MONTHLY</Text>
                                    </TouchableOpacity>
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />

                                </View>
                                <View style={styles.differPlans}>
                                    <TouchableOpacity style={styles.days}>
                                        <Text style={{ color: COLORS.black, fontWeight: '500' }}>WEEKLY</Text>
                                    </TouchableOpacity>
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />
                                    <Plans
                                        Bgcolor={COLORS.white}
                                        title={"2 SWAP '165"}
                                    />

                                </View>

                            </View>

                        </View>
                    </View>
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
export default ChooseAplan