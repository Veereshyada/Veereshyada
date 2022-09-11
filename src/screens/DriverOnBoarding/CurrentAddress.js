import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import TextInputComponent from "../../components/input";
import Header from "../../components/header";
import Button from "../../components/button";
import COLORS from "../../constant/color";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";



const CurrentAddress = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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

    const [inputs, setInputs] = React.useState({ address_line1: '', area: '', pincode: '', city: '', state: '', address_line2: '', area2: '', pincode2: '', city2: '', state2: '' });
    const [errors, setErrors] = React.useState({ address_line1: '', area: '', pincode: '', city: '', state: '', address_line2: '', area2: '', pincode2: '', city2: '', state2: '' });
    const [incorrect, setErrorotp] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [isEditable, setEditable] = React.useState(true);
    const [isValidate, setIsValidate] = React.useState(false);


    const Validate = () => {
        Keyboard.dismiss();
        let isValid = false;
        if (!inputs.address_line1) {
            handleError("Please fill address", "address_line1")
            isValid = false;
        } else {
            handleError(null, "address_line1")
            isValid = true;
        } if (!inputs.area) {
            handleError("Please fill area", "area")
            isValid = false;
        } else {
            handleError(null, "area")
            isValid = true;
        } if (!inputs.pincode) {
            handleError("Please fill pincode", "pincode")
            isValid = false;
        } else {
            handleError(null, "pincode")
            isValid = true;
        } if (!inputs.city) {
            handleError("Please fill city", "city")
            isValid = false;
        } else {
            handleError(null, "city")
            isValid = true;
        } if (!inputs.state) {
            handleError("Pleae fill state", "state")
            isValid = false;
        } else {
            handleError(null, "state")
            isValid = true;
        } if (!inputs.address_line2) {
            handleError("Please fill address", "address_line2")
            isValid = false;
        } else {
            handleError(null, "address_line2")
            isValid = true;
        } if (!inputs.area2) {
            handleError("Please fill area", "area2")
            isValid = false;
        } else {
            handleError(null, "area2")
            isValid = true;
        } if (!inputs.pincode2) {
            handleError("Please fil pincode ", "pincode2")
            isValid = false;
        } else {
            handleError(null, "pincode2")
            isValid = true;
        } if (!inputs.city2) {
            handleError("Please fill city", "city2")
            isValid = false;
        } else {
            handleError(null, "city2");
            isValid = true;
        } if (!inputs.state2) {
            handleError("Please fill state", "state2")
            isValid = false;
        } else {
            handleError(null, "state2")
            isValid = true;
        }
        setIsValidate(isValid)
    }


    useEffect(() => {
        if (toggleCheckBox) {
            setInputs(prevState => ({ ...prevState, ["address_line2"]: inputs.address_line1, ["area2"]: inputs.area, ["pincode2"]: inputs.pincode, ["city2"]: inputs.city, ["state2"]: inputs.state }));
            setEditable(false)
            // Validate()
        } else {
            // setInputs(prevState => ({ ...prevState, ["address_line2"]: '', ["area2"]: '', ["pincode2"]: '', ["city2"]: '', ["state2"]: '' }));
            setEditable(true)
            // Validate()
        }
    }, [toggleCheckBox])
    // console.log(inputs, "inputs")


    const handleOnchange = (text, input) => {
        //setPhone(updata.password);
        // console.log(text,input,"tet,input")
        setInputs(prevState => ({ ...prevState, [input]: text }));
        setIsValidate(false)
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };


    const driverDocumentationUpload = () => {

        //if (isValidate) {
        navigation.navigate("DriverDocumentuplaod")
        //}
        Validate()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />
            <ScrollView style={{ backgroundColor: COLORS.skyblue }} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: COLORS.skyblue, width: '95%', alignSelf: 'center' }}>
                    <BackgrundText
                        HeadingName={"Driver onboarding"}
                        imagName={Images.whiteImg}
                        linename={Images.whiteLine}
                        Imgcolor={COLORS.white}
                        TextColor={COLORS.skyblue}
                        imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                    />
                    <Text style={{ fontSize: 20, color: COLORS.white, with: '40%', paddingVertical: 10, fontWeight: '700' }}>Current Address</Text>
                    <TextInputComponent
                        label="Address line1"
                        placeholder="House No. 243"
                        onChangeText={text => handleOnchange(text, 'address_line1')}
                        onFocus={() => handleError(null, 'address_line1')}
                        error={errors.address_line1}
                    />
                    <TextInputComponent
                        label="Area"
                        placeholder="HOkhla Phase 3"
                        onChangeText={text => handleOnchange(text, 'area')}
                        onFocus={() => handleError(null, 'area')}
                        error={errors.area}

                    />
                    <TextInputComponent
                        label="Pin Code"
                        placeholder="110020"
                        onChangeText={text => handleOnchange(text, 'pincode')}
                        onFocus={() => handleError(null, 'pincode')}
                        error={errors.pincode}
                        keyboardType='numeric'
                    />
                    <TextInputComponent
                        label="City"
                        placeholder="New Delhi"
                        onChangeText={text => handleOnchange(text, 'city')}
                        onFocus={() => handleError(null, 'city')}
                        error={errors.city}
                    />
                    <TextInputComponent
                        label="State"
                        placeholder="New Delhi"
                        onChangeText={text => handleOnchange(text, 'state')}
                        onFocus={() => handleError(null, 'state')}
                        error={errors.state}
                    />
                    <View style={{ flexDirection: "row", width: '100%' }}>
                        <View style={{ flexDirection: "row", width: '50%', alignItems: 'center', }}>
                            <Text style={styles.checktext}>Permanent Address</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: '50%', alignItems: 'center' }}>
                            <CheckBox style={styles.checkbox}
                                tintColors={'green'}
                                onCheckColor={'red'}
                                onFillColor={'yellow'}
                                onTintColor={'#80F4E8'}
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                            />
                            <Text style={styles.checktext}>Same as Current</Text>
                        </View>


                    </View>
                    <TextInputComponent
                        label="Address line1"
                        placeholder="House No. 243"
                        onChangeText={text => handleOnchange(text, 'address_line2')}
                        onFocus={() => handleError(null, 'address_line2')}
                        error={errors.address_line2}
                        value={inputs.address_line2}
                        isEditable={isEditable}
                    />
                    <TextInputComponent
                        label="Area"
                        placeholder="HOkhla Phase 3"
                        onChangeText={text => handleOnchange(text, 'area2')}
                        onFocus={() => handleError(null, 'area2')}
                        error={errors.area2}
                        value={inputs.area2}
                        isEditable={isEditable}
                    />
                    <TextInputComponent
                        label="Pin Code"
                        placeholder="110020"
                        onChangeText={text => handleOnchange(text, 'pincode2')}
                        onFocus={() => handleError(null, 'pincode2')}
                        error={errors.pincode2}
                        value={inputs.pincode2}
                        isEditable={isEditable}
                        keyboardType='numeric'
                    />
                    <TextInputComponent
                        label="City"
                        placeholder="New Delhi"
                        onChangeText={text => handleOnchange(text, 'city2')}
                        onFocus={() => handleError(null, 'city2')}
                        error={errors.city2}
                        value={inputs.city2}
                        isEditable={isEditable}
                    />
                    <TextInputComponent
                        label="State"
                        placeholder="New Delhi"
                        onChangeText={text => handleOnchange(text, 'state2')}
                        onFocus={() => handleError(null, 'state2')}
                        error={errors.state2}
                        value={inputs.state2}
                        isEditable={isEditable}
                    />
                    <Button
                        title={"Next"}
                        onPress={driverDocumentationUpload}
                        Style={{ width: '100%' }}
                    />
                    <View style={{ height: 30 }}></View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    checktext: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
    },
    checkbox: {
        margin: 8,

    },
    inputbox: {
        flexDirection: "row"
    }
})
export default CurrentAddress;