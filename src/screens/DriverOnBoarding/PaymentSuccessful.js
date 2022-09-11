import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/AntDesign'
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';
import Header from '../../components/header';

const PaymentSuccessful = ({ navigation }) => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#003B4D" }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />

            <ScrollView >
                <BackgrundText
                    HeadingName={"Payment Successful"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={{ width: '95%', alignSelf: 'center' }}>
                    <View style={styles.payImage}>
                        <Image source={require('../../assets/imgs/payImage.png')} style={styles.payIma} />
                    </View>
                    <Text style={styles.textpay}> ANKUR KUMAR</Text>
                    <Text style={styles.textpay2}>DR293838 </Text>
                    <View style={styles.payImageScces}>
                        <Image source={require('../../assets/imgs/Assetpaysucces.png')} style={styles.paySucces} />
                    </View>
                    <Text style={styles.textpay}> Pay: ₹5000</Text>
                    <Text style={styles.textpay}>Transaction Successful </Text>
                    <View style={{ flexDirection: 'row', height: 170, backgroundColor: COLORS.white, borderRadius: 15, marginTop: 10, padding: 20 }}>
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: COLORS.silver, fontSize: 18, fontWeight: '500' }}>PLAN FOR</Text>
                            <Text style={{ color: COLORS.skyblue, fontSize: 24, fontWeight: '800', marginVertical: 5 }}>2 Sawps Enabled</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.todatcard}>FOR TODAY</Text><Icon style={{ marginTop: 5 }} name='caretright' size={20} color={COLORS.skyblue} />
                            </View>
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center', marginTop: '20%' }}>
                            <Image source={Images.auto} style={{ height: 110, width: 190 }} />
                        </View>
                    </View>
                    <View style={{ marginVertical: 30 }}>
                        <Button
                            title={"Ok"}
                            onPress={() => navigation.navigate("PaymentError")}
                            Style={{ width: '80%' }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    payImage: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: "center"
    },
    payImageScces: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    payIma: {
        width: 150,
        height: 130
    },
    paySucces: {
        width: 90,
        height: 90
    },
    cardPay: {
        alignSelf: "center",
        width: '85%',
        height: 200,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,

    },
    autoimg: {
        width: '120%',
        height: 180
    },
    textcard: {
        fontSize: 16,
        fontWeight: "600"
    },
    textcard2: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#003B4D'
    },
    todatcard: {
        marginTop: '2%',
        color: "#003B4D",
        fontSize: 16,
        fontWeight: "bold",
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    textpay: {
        textAlign: "center",
        marginTop: 20,
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    textpay2: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})
export default PaymentSuccessful;
