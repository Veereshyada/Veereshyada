import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Button from '../../components/button';
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import Header from '../../components/header';
import COLORS from '../../constant/color';

const PaymentError = ({ navigation }) => {
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
    const Validate = () => {
        navigation.navigate("ChooseAplan")
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

            <ScrollView >
                <BackgrundText
                    HeadingName={"Payment Error"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={styles.payImage}>
                    <Image source={require('../../assets/imgs/payImage.png')} style={styles.payIma} />
                </View>
                <Text style={{ textAlign: "center", marginTop: 20, color: COLORS.white, fontSize: 16, fontWeight: "bold" }}> ANKUR KUMAR</Text>
                <Text style={{ textAlign: "center", marginTop: 10, color: COLORS.white, fontSize: 16, fontWeight: "bold" }}>DR293838 </Text>
                <View style={styles.payImageScces}>
                    <Image source={require('../../assets/imgs/Assetpayfail.png')} style={styles.paySucces} />
                </View>
                <Text style={{ textAlign: "center", marginTop: 20, color: COLORS.white, fontSize: 16, fontWeight: "bold" }}> Pay: ₹5000</Text>
                <Text style={{ textAlign: "center", marginTop: 10, color: COLORS.white, fontSize: 16, fontWeight: "bold" }}>Transaction Failed --- RETRY </Text>
                <View style={{ marginTop: 40 }}>
                    <Button
                        title={"Ok"}
                        onPress={Validate}
                        Style={{ width: '80%' }} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    payImage: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: "center"
    },
    payImageScces: {
        marginTop: 20,
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
    }
})
export default PaymentError;
