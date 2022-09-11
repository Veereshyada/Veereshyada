import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, StyleSheet } from 'react-native';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/button';


const GuarantorDetailsPayment = ({ navigation }) => {
    const [updata, setUpdata] = React.useState({ wallets: '', upi: '', });
    const [errors, setErrors] = React.useState({});

    const Pay = () => {
        Keyboard.dismiss();
        if (!updata.wallets) {
            handleError('Please Wallets', 'wallets')
        }
        if (!updata.upi) {
            handleError('Please enter UPI Id', 'upi')
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
        navigation.navigate("PaymentSuccessful")
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
            {/* <Image source ={require('../../assets/images/Guarantor.png')}style={{width:'100%',height:'65%'}}/> */}
            <ScrollView >
                <View style={{ backgroundColor: "#003B4D" }}>
                    <View style={{ flexDirection: 'row', margin: 20 }}>

                        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>Pay: INR 5000</Text>
                        <Text style={{ marginLeft: 15 }}><Icon style={{ marginTop: 16 }} name='rupee' size={40} color='green' /></Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", marginLeft: 15 }}>Pay by Cash at EoD (Option to enabled from backend for Credit Cases)</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", marginLeft: 15, textAlign: 'left', marginRight: 4, marginTop: 10 }}>Pay By Cash Later (Option to enabled from backend
                        for Credit Cases)</Text>
                    <View style={{ borderBottomColor: '#fff', width: '90%', borderBottomWidth: 2, margin: 15 }}>
                        <TextInput
                            onChangeText={text => handleOnchange(text, 'wallets')}
                            onFocus={() => handleError(null, 'wallets')}
                            error={errors.wallets}
                            style={{ fontSize: 16, fontWeight: "bold", color: "#fff", paddingBottom: 10 }}
                            placeholder='Wallets' />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}>

                        <Image source={require('../../assets/imgs/paytmicon.png')} style={{ width: '30%', height: 50 }} />
                        <Image style={{ width: 50, height: 50, marginLeft: 15, borderColor: '#fff', borderWidth: 2 }} source={require('../../assets/imgs/airtelicon.png')} />

                    </View>
                    <View style={{ borderBottomColor: '#fff', borderBottomWidth: 2, margin: 15 }}>
                        <TextInput
                            onChangeText={text => handleOnchange(text, 'upi')}
                            onFocus={() => handleError(null, 'upi')}
                            error={errors.upi}
                            style={styles.iputupi} placeholder='UPI' />
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 20 }}>

                        <Image source={require('../../assets/imgs/upi.png')} style={{ width: '30%', height: 50 }} />
                        <Image style={{ width: 50, height: 50, marginLeft: 15 }} source={require('../../assets/imgs/Bimupi.png')} />

                    </View>

                    <View style={{ marginTop: 40 }}>
                        <Button
                            title={'Pay Now'}
                            onPress={Pay}
                            Style={{ width: '80%' }} />
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    iputupi: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 10
    }
})

export default GuarantorDetailsPayment;