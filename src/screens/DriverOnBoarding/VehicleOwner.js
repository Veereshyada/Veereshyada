import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import TextInputComponent from "../../components/input";
import Button from "../../components/button";
import UploadPhoto from "../../components/UploadPhoto";
import Header from "../../components/header";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';
import ImagePicker from 'react-native-image-picker';
import option from '../../constant/options';
const VehicleOwner = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [inputs, setInputs] = React.useState({ V_name: '', mobile_no: '', address_line1: '', area: '', pincode: '', city: '', state: '', address_line2: '', area2: '', pincode2: '', city2: '', state2: '' });
    const [errors, setErrors] = React.useState({ address_line1: '', area: '', pincode: '', city: '', state: '', address_line2: '', area2: '', pincode2: '', city2: '', state2: '' });
    const [loading, setLoading] = React.useState(false);
    const [isEditable, setEditable] = React.useState(true)

    const VehicleOwnerDetail = () => {
        Keyboard.dismiss();
        if (!inputs.V_name) {
            handleError("Please fill Name", "V_name")
        } if (!inputs.mobile_no) {
            handleError("Please fill Mobile Number", "mobile_no")
        }
        if (!inputs.address_line1) {
            handleError("Please fill address", "address_line1")
        } if (!inputs.area) {
            handleError("Please fill area", "area")
        } if (!inputs.pincode) {
            handleError("Please fill pincode", "pincode")
        } if (!inputs.city) {
            handleError("Please fill city", "city")
        } if (!inputs.state) {
            handleError("Pleae fill state", "state")
        } if (!inputs.address_line2) {
            handleError("Please fill address line2", "address_line2")
        } if (!inputs.area2) {
            handleError("Please fill area", "area2")
        } if (!inputs.pincode2) {
            handleError("Please fil pincode ", "pincode2")
        } if (!inputs.city2) {
            handleError("Please fill city", "city2")
        } if (!inputs.state2) {
            handleError("Please fill state", "state2")
        }
        Validate();
    }

    const VechiclePhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };
    useEffect(() => {
        if (toggleCheckBox) {
            setInputs(prevState => ({ ...prevState, ["address_line2"]: inputs.address_line1, ["area2"]: inputs.area, ["pincode2"]: inputs.pincode, ["city2"]: inputs.city, ["state2"]: inputs.state }));
            setEditable(false)
        } else {
            setInputs(prevState => ({ ...prevState, ["address_line2"]: '', ["area2"]: '', ["pincode2"]: '', ["city2"]: '', ["state2"]: '' }));
            setEditable(true)
        }

    }, [toggleCheckBox])
    console.log(inputs, "inputs")

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
        navigation.navigate("GuarantorDetails")
    }

    const handleOnchange = async (text, input) => {
        //setPhone(updata.password);

        setInputs(prevState => ({ ...prevState, [input]: text }));

    };
    const handleError = (error, input) => {

        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
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
                    HeadingName={"Driver onboarding"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />

                <View style={{ marginVertical: 20, width: '95%', alignSelf: "center" }}>


                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'V_name')}
                        onFocus={() => handleError(null, 'V_name')}
                        error={errors.V_name}
                        label="Name"
                        placeholder="House No. 243"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'mobile_no')}
                        onFocus={() => handleError(null, 'mobile_no')}
                        error={errors.mobile_no}
                        label="Mobile Number"
                        keyboardType='numeric'
                        placeholder="7303988882"
                    />

                    <Text style={{ fontSize: 20, marginVertical: 10, color: COLORS.white, fontWeight: '700' }}>Current Address</Text>
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'address_line1')}
                        onFocus={() => handleError(null, 'address_line1')}
                        error={errors.address_line1}
                        label="Address line1"
                        placeholder="House No. 285"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'area')}
                        onFocus={() => handleError(null, 'area')}
                        error={errors.area}
                        label="Area"
                        placeholder="DLF Heritage"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'pincode')}
                        onFocus={() => handleError(null, 'pincode')}
                        error={errors.pincode}
                        keyboardType='numeric'
                        label="Pin Code"
                        placeholder="2100202"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'city')}
                        onFocus={() => handleError(null, 'city')}
                        error={errors.city}
                        label="City"
                        placeholder="Gurgaon"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'state')}
                        onFocus={() => handleError(null, 'state')}
                        error={errors.state}
                        label="State"
                        placeholder="Haryana"
                    />
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.checktext}>Permanent Address</Text>
                        <CheckBox style={styles.checkbox}
                            tintColors={'green'}
                            onCheckColor={'red'}
                            onFillColor={'yellow'}
                            onTintColor={'#80F4E8'}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                        />
                        <Text style={styles.checktext1}>Same as Current Address</Text>
                    </View>
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'address_line2')}
                        onFocus={() => handleError(null, 'address_line2')}
                        error={errors.address_line2}
                        value={inputs.address_line2}
                        isEditable={isEditable}
                        label="Address line1"
                        placeholder="House No. 285"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'area2')}
                        onFocus={() => handleError(null, 'area2')}
                        error={errors.area2}
                        value={inputs.area2}
                        isEditable={isEditable}
                        label="Area"
                        placeholder="DLF Heritage"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'pincode2')}
                        onFocus={() => handleError(null, 'pincode2')}
                        error={errors.pincode2}
                        value={inputs.pincode2}
                        isEditable={isEditable}
                        keyboardType='numeric'
                        label="Pin Code"
                        placeholder="2100202"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'city2')}
                        onFocus={() => handleError(null, 'city2')}
                        error={errors.city2}
                        value={inputs.city2}
                        isEditable={isEditable}
                        label="City"
                        placeholder="Gurgaon"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'state2')}
                        onFocus={() => handleError(null, 'state2')}
                        error={errors.state2}
                        value={inputs.state2}
                        isEditable={isEditable}
                        label="State"
                        placeholder="Haryana"
                    />
                    <View style={{ flexDirection: "row", marginTop: '2%' }}>
                        <Text style={styles.checktext2}>Upload Document</Text>
                        <UploadPhoto 
                        onPress={VechiclePhoto}
                        style={{ marginLeft: '12%' }} />

                    </View>
                    <View style={{ marginTop: 40 }}></View>
                    <Button
                        title={"Next"}
                        onPress={VehicleOwnerDetail}
                        Style={{ width: '100%' }}
                    />


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
        marginLeft: 0,
        marginTop: 10,
        width: "35%"
    },
    checktext2: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
        width: "30%"
    },
    checktext1: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",

        marginTop: 10
    },
    checkbox: {
        marginTop: 5,

    },
})
export default VehicleOwner;