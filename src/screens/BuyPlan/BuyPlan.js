import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import CustomHeader from "../../components/header";
import COLORS from "../../Constants/color";
import { useTranslation } from "react-i18next";
const BuyPlan = ({ navigation }) => {
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
    const Data = [
        {
            key: '1',
            PlanPrise: "₹165",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        },
        {
            key: '2',
            PlanPrise: "₹235",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        },
        {
            key: '3',
            PlanPrise: "₹465",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        },
        {
            key: '4',
            PlanPrise: "₹865",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        },
        {
            key: '5',
            PlanPrise: "₹1050",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        },
        {
            key: '6',
            PlanPrise: "₹2050",
            PlanValidity: 'daily_one_day',
            PlanSwap: 'MIN 25 Days'
        }
    ]

    const arrayChunk = (Data, n) => {
        const array = Data.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
    };

    function App() {
        return (
            <View className="App">
                {arrayChunk([...Array(Data.length).keys()], 2).map((row, i) => (
                    <View key={i} style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        {row.map((col, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => navigation.navigate("Pay Wallet Option")}
                                style={Styles.Plans}>
                                <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 15, fontWeight: Platform.OS == 'android' ? '500' : '700', textTransform: 'uppercase', color: 'green' }}>daily_one_day</Text>
                                <Text style={{ fontWeight: "700", padding: 3, fontSize: 15, color: 'green' }}>₹165</Text>
                                <Text style={{ fontSize: 13, marginTop: 5, color: 'green', fontWeight: '400' }}>MIN 25 Days</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        );
    }

    const list = () => {
        return Data.map((element, index) => {
            return (
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <TouchableOpacity
                        key={element.key}
                        onPress={() => navigation.navigate("Pay Wallet Option")}
                        style={Styles.Plans}>
                        <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 15, fontWeight: Platform.OS == 'android' ? '500' : '700', textTransform: 'uppercase', color: 'green' }}>daily_one_day</Text>
                        <Text style={{ fontWeight: "700", padding: 3, fontSize: 15, color: 'green' }}>₹165</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, color: 'green', fontWeight: '400' }}>MIN 25 Days</Text>
                    </TouchableOpacity>
                </View>
            );
        });
    };

    const GoToPay = () => { () => navigation.navigate("Pay Wallet Option") }
    const Penality = () => {
        return (
            <View style={{ width: "100%", flexDirection: "row", paddingTop: 10 }}>
                <View style={{ width: "50%" }}>
                    <Text
                        style={{ fontSize: 17, color: COLORS.skyblue, fontWeight: "600" }}
                    >
                        {t('Pending_Penalty')}
                    </Text>
                </View>
                <View style={{ width: "50%" }}>
                    <Text
                        style={{
                            fontSize: 17,
                            color: COLORS.skyblue,
                            alignSelf: "flex-end",
                            fontWeight: "600",
                        }}
                    >
                        ₹0.0
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                BuyPalnPenality={Penality()}
                HeadingName={t('Buy_a_Plan')}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: "30%", lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Styles.PlanContainner}>
                {/* <Text style={{ color: COLORS.white, fontWeight: '700', marginTop: 10, fontSize: 18 }}>{t('Aplicable_Plans')}</Text> */}
                <View>
                    
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: '700', marginTop: 60 }}>{t("plans")}</Text>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{ color: COLORS.white, fontWeight: '700', marginTop: 10, fontSize: 18 }}>{t('Total_Payable')}</Text>
                    <Text style={{ marginLeft: Platform.OS == 'android' ? '55%' : '50%', color: COLORS.white, fontWeight: '700', marginTop: 10, fontSize: 18 }}>₹00</Text>
                </View> */}
            </ScrollView>

        </SafeAreaView>
    )
}


const Styles = StyleSheet.create({
    PlanContainner: {
        width: '100%',
        paddingHorizontal: 10,
        alignSelf: 'center',
        backgroundColor: COLORS.skyblue
    },
    PlanSubContainner:
    {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    Plans: {
        backgroundColor: '#F9F9F9',
        paddingVertical: Platform.OS == 'android' ? 15 : 15,
        paddingHorizontal: Platform.OS == 'android' ? '7%' : '12%',
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'baseline',
        alignItems: 'center',
        margin: '2%'
    }
})

export default BuyPlan;