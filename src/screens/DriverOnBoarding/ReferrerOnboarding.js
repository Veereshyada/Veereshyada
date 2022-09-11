import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import SelectDropDown from "../../components/SelectDropDown";
import TextInputComponent from '../../components/input';
import Button from '../../components/button';
import Header from "../../components/header";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';
import DropList from '../../constant/Dropdownlist'

const ReferrerOnboarding = ({ navigation }) => {
    const [updata, setUpdata] = React.useState({ Onbordingthru: '',SchemeChoosen:'', onboarded: '', j_fees: '', securtyAmount: '', total: '' });
    const [errors, setErrors] = React.useState({});

    const Rerrerdriver = () => {
        Keyboard.dismiss();
        if (!updata.onboarded) {
            handleError('Please enter Onboarded by', 'onboarded')
        }
        if (!updata.j_fees) {
            handleError('Please enter Joining Fees', 'j_fees')
        }
        if (!updata.securtyAmount) {
            handleError('Please enter Security Amount', 'securtyAmount')
        }
        if (!updata.total) {
            handleError('Please enter Total', 'total')
        }
        Validate();

    }

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
        navigation.navigate("GuarantorDetailsPayment")
    }

    const handleOnchange = async (text, input) => {
        //setPhone(updata.password);

        setUpdata(prevState => ({ ...prevState, [input]: text }));

    };
    const handleError = (error, input) => {

        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#003B4D" }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />
            <ScrollView style={{}}>
                <BackgrundText
                    HeadingName={"Referrer & Onboarding"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={{ marginVertical: 20, width: '95%', alignSelf: "center" }}>

                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'Onbordingthru') }}
                        onFocus={() => handleError(null, 'Onbordingthru')}
                        error={errors.Onbordingthru}
                        item={DropList.ReferrerOnboarding.thru}
                        label='Onboarding thru'
                    />

                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'onboarded')}
                        onFocus={() => handleError(null, 'onboarded')}
                        error={errors.onboarded}
                        label="Onboarded by"
                        placeholder=""
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'SchemeChoosen') }}
                        onFocus={() => handleError(null, 'SchemeChoosen')}
                        error={errors.SchemeChoosen}
                        item={DropList.ReferrerOnboarding.SchemeChoosen}
                        label='Joining Scheme Choosen'
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'j_fees')}
                        onFocus={() => handleError(null, 'j_fees')}
                        error={errors.j_fees}
                        label="Joining Fees
                        Received"
                        keyboardType='numeric'
                        placeholder="2000/-"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'securtyAmount')}
                        onFocus={() => handleError(null, 'securtyAmount')}
                        error={errors.securtyAmount}
                        label="Security Amount
                        Received"
                        keyboardType='numeric'
                        placeholder="3000/-"

                    />

                    <TextInputComponent style={{ marginLeft: '4%' }}
                        onChangeText={text => handleOnchange(text, 'total')}
                        onFocus={() => handleError(null, 'total')}
                        error={errors.total}
                        label="Total"
                        keyboardType='numeric'
                        placeholder="5000/-"

                    />

                    <View style={{ marginTop: 40 }}>
                        <Button
                            title={"Submit"}
                            onPress={Rerrerdriver}
                            Style={{ width: '90%' }}
                        />
                    </View>



                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    checktext: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10
    },
    checktext1: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",

        marginTop: 10
    },
    checkbox: {
        margin: 8,

    },
})

export default ReferrerOnboarding;