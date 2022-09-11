import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from "react-native";
import Button from "../../components/button";
import Header from "../../components/header";
import COLORS from "../../constant/color";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
const DriverOnBoardingOtpValidation = ({ navigation }) => {
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
            <BackgrundText
                HeadingName={"Driver onboarding"}
                imagName={Images.whiteImg}
                linename={Images.whiteLine}
                Imgcolor={COLORS.white}
                TextColor={COLORS.skyblue}
                imageSize={{ bgWidth: '95%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '46%', marginLeft: "-26%" }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '95%', justifyContent: "center", alignItems: "center", marginTop: '15%' }}>
                    <View style={{ justifyContent: "center", alignItems: "center", }}>
                        <Image source={require("../../assets/imgs/sendotp.jpg")} style={styles.imgview} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 60 }}>
                        <Text style={styles.textitem}>
                            Enter OTP Rcvd on Driver ID
                        </Text><Text style={{ color: "#fff", marginLeft: 5, marginRight: 5 }}>:</Text>
                        <Text style={styles.textitem1}>
                            6373
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, width: '100%' }}>
                        <TextInput
                            placeholder="Validate OTP"
                            placeholderTextColor={COLORS.silver}
                            style={{ backgroundColor: COLORS.white, width: '70%', borderRadius: 10, alignSelf: "center", textAlign: 'center' }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Button
                        title={"Submit"}
                        Style={{ width: '70%' }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    imgview: {
        width: 200,
        height: 200,
    },
    textitem: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    textitem1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green"
    },
})

export default DriverOnBoardingOtpValidation;