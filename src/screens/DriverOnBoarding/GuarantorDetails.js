import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import TextInputComponent from "../../components/input";
import Button from "../../components/button";
import SelectDropDown from "../../components/SelectDropDown";
import UploadImage from "../../components/UploadPhoto";
import Header from "../../components/header";
import COLORS from "../../constant/color";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import DropList from "../../constant/Dropdownlist";
import ImagePicker from 'react-native-image-picker';
import option from '../../constant/options';
const GuarantorDetails = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [updata, setUpdata] = React.useState({ G_name: '', mobile_No: '', reltionDriver: '', Address: '', Area: '', pincode: '', city: '', state: '', adharid: '' });
    const [errors, setErrors] = React.useState({});

    const GuarntorRegister = () => {
        Keyboard.dismiss();
        if (!updata.G_name) {
            handleError('Please enter Name', 'G_name')
        }
        if (!updata.mobile_No) {
            handleError('Please enter Aadhar Card No', 'mobile_No')
        }
        if (!updata.Address) {
            handleError('Please enter Mobile Number', 'Address')
        }
        if (!updata.Area) {
            handleError('Please enter Voter Id', 'Area')
        }
        if (!updata.pincode) {
            handleError('Please enter Voter Id', 'pincode')
        }
        if (!updata.city) {
            handleError('Please enter Voter Id', 'city')
        }
        if (!updata.state) {
            handleError('Please enter Voter Id', 'state')
        }
        if (!updata.adharid) {
            handleError('Please enter Voter Id', 'adharid')
        }
        Validate();
    }

    const guarntorphoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ Driver_Phot: response.fileName });
            }
        });
    };


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
        navigation.navigate("ReferrerOnboarding")
    }
    const handleOnchange = async (text, input) => {
        //setPhone(updata.password);

        setUpdata(prevState => ({ ...prevState, [input]: text }));

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
            <ScrollView>
                <BackgrundText
                    HeadingName={"Guarantor Details"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-23%" }}
                />
                <View style={{ width: '95%', alignSelf: "center", marginVertical: 20 }}>

                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'G_name')}
                        onFocus={() => handleError(null, 'G_name')}
                        error={errors.G_name}
                        label="Name"
                        placeholder="Chetan"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'mobile_No')}
                        onFocus={() => handleError(null, 'mobile_No')}
                        error={errors.mobile_No}
                        label="Mobile Number"
                        keyboardType='numeric'
                        placeholder="7303988882"
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'reltionDriver') }}
                        onFocus={() => handleError(null, 'reltionDriver')}
                        error={errors.reltionDriver}
                        item={DropList.GuarantorDetails.relation}
                        label='Relation with the Driver' />

                    <Text style={{ fontSize: 20, color: COLORS.white, marginBottom: 20, fontWeight: '700' }}>Current Address</Text>
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'Address')}
                        onFocus={() => handleError(null, 'Address')}
                        error={errors.Address}
                        label="Address line1"
                        placeholder="Flat No. 285"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'Area')}
                        onFocus={() => handleError(null, 'Area')}
                        error={errors.Area}
                        label="Area"
                        placeholder="DLF Heritage"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'pincode')}
                        onFocus={() => handleError(null, 'pincode')}
                        error={errors.pincode}
                        label=" Pin Code"
                        keyboardType='numeric'
                        placeholder="2100202"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'city')}
                        onFocus={() => handleError(null, 'city')}
                        error={errors.city}
                        label="City"
                        placeholder="New Delhi"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'state')}
                        onFocus={() => handleError(null, 'state')}
                        error={errors.state}
                        label="State"
                        placeholder="New Delhi"
                    />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.checktext}>Permanent Address</Text>
                        <CheckBox style={styles.checkbox}
                            tintColors={'green'}
                            onCheckColor={'red'}
                            onFillColor={'yellow'}
                            onTintColor={'#80F4E8'}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.checktext1}>Same as Current Address</Text>
                    </View>
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'Address')}
                        onFocus={() => handleError(null, 'Address')}
                        error={errors.Address}
                        label="Address line1"
                        placeholder="House No. 243"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'Area')}
                        onFocus={() => handleError(null, 'Area')}
                        error={errors.Area}
                        label="Area"
                        placeholder="HOkhla Phase 3"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'pincode')}
                        onFocus={() => handleError(null, 'pincode')}
                        error={errors.pincode}
                        label="Pin Code"
                        placeholder="110020"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'city')}
                        onFocus={() => handleError(null, 'city')}
                        error={errors.city}
                        label="City"
                        placeholder="New Delhi"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'state')}
                        onFocus={() => handleError(null, 'state')}
                        error={errors.state}
                        label="State"
                        placeholder="New Delhi"
                    />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'adharid')}
                        onFocus={() => handleError(null, 'adharid')}
                        error={errors.adharid}
                        label="Aadhar ID"
                        keyboardType='numeric'
                        placeholder="FT4020MJHT"
                    />
                    <View style={{ flexDirection: 'row', width: "100%", paddingBottom: 20 }}>
                        <View style={{ justifyContent: "center", width: "80%" }}>
                            <Text style={{
                                fontSize: 16,
                                width: '40%',
                                fontWeight: "bold",
                                color: '#fff'
                            }}>Driver Photo*</Text>
                        </View>
                        <View style={{ width: "60%" }}>
                            <UploadImage
                            onPress={guarntorphoto} />
                        </View>
                    </View>
                    <Button
                        title={'Next'}
                        onPress={GuarntorRegister}
                        Style={{ width: '100%' }}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    checktext: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
    },
    checktext1: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
    },
    checkbox: {
        // margin: 8,

    },
})
export default GuarantorDetails;