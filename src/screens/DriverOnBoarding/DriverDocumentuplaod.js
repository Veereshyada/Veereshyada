import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import TextInputComponent from "../../components/Inputcustom";
import Button from "../../components/button";
import UploadImage from '../../components/UploadPhoto'
import Header from "../../components/header";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from "../../constant/color";
import TxtInput from "../../components/InputHorizontal";
import ImagePicker from 'react-native-image-picker';
import option from '../../constant/options';
import { invalid } from "moment";
const DriverDocumentuplaod = ({ navigation }) => {
    const [Photo, setPhoto] = useState({ Driver_Photo: '', D_Licence_Photo: '', Aadhar_no_Photo: '', Pan_no_Photo: '', Voter_no_Photo: '' });
    const [updata, setUpdata] = React.useState({ D_Licence: '', Aadhar_no: '', Pan_no: '', Voter_no: '' });
    const [errors, setErrors] = React.useState({});
    const [incorrect, setErrorotp] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const DriverRegiser = () => {
        Keyboard.dismiss();
        if (!updata.D_Licence) {
            handleError('Please enter Driver Licence No', 'D_Licence')
        }
        if (!updata.Aadhar_no) {
            handleError('Please enter Aadhar Card No', 'Aadhar_no')
        }
        if (!updata.Pan_no) {
            handleError('Please enter Pan Card No', 'Pan_no')
        }
        if (!updata.Voter_no) {
            handleError('Please enter Voter Id', 'Voter_no')
        }
        Validate();
        console.log(updata.D_Licence, updata.Aadhar_no, updata.Pan_no, updata.Voter_no, "regisetr")
    }


    //upload Images
    const DriverPhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ Driver_Phot: response.fileName });
            }
        });
    };

    const AadharPhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };

    const PanCardPhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };



    const VoterIDPhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };
    const DriverLicencePhoto = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };
    // console.log(Photo.Driver_Photo, "urlphot1");
    // console.log(Photo.D_Licence_Photo, "urlphot2");





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
        navigation.navigate("PersonalDetails")
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

            <ScrollView style={{ backgroundColor: COLORS.skyblue }} showsVerticalScrollIndicator={false}>
                <BackgrundText
                    HeadingName={"Driver"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={{ width: '95%', alignSelf: "center", }}>
                    <View style={[styles.main, { marginVertical: 15 }]}>
                        <View style={styles.submain}>
                            <Text style={styles.phototext}>Driver Photo*</Text>
                        </View>
                        <View style={styles.sub}>
                            <UploadImage
                                onPress={DriverPhoto}
                            />
                        </View>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.submain}>
                            <TxtInput
                                onChangeText={text => handleOnchange(text, 'D_Licence')}
                                onFocus={() => handleError(null, 'D_Licence')}
                                error={errors.D_Licence}
                                placeholder={'DL282846v943934'}
                                label={'Driver Licence Number (Optional)'} />

                        </View>
                        <View style={styles.sub}>
                            <UploadImage
                                onPress={DriverLicencePhoto}
                            />
                        </View>
                        <Text style={{ paddingBottom: 20, color: 'red', fontSize: 12 }}>{incorrect}</Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.submain}>
                            <TxtInput
                                onChangeText={text => handleOnchange(text, 'Aadhar_no')}
                                onFocus={() => handleError(null, 'Aadhar_no')}
                                error={errors.Aadhar_no}
                                label={'Aadhar Card*'}
                                keyboardType='numeric'
                                placeholder={"554841301600"} />
                        </View>
                        <View style={styles.sub}>
                            <UploadImage
                            onPress={AadharPhoto}
                            />
                        </View>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.submain}>
                            <TxtInput
                                onChangeText={text => handleOnchange(text, 'Pan_no')}
                                onFocus={() => handleError(null, 'Pan_no')}
                                error={errors.Pan_no}
                                label={'PAN Card Number*'}
                                placeholder={"PVND4113N"} />
                        </View>
                        <View style={styles.sub}>
                            <UploadImage
                            onPress={PanCardPhoto} 
                            />
                        </View>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.submain}>
                            <TxtInput
                                onChangeText={text => handleOnchange(text, 'Voter_no')}
                                onFocus={() => handleError(null, 'Voter_no')}
                                error={errors.Voter_no}
                                label={'Voter ID (Optional)'}
                                placeholder={"AKNCM2929M"} />
                        </View>
                        <View style={styles.sub}>
                            <UploadImage
                            onPress={VoterIDPhoto}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: "15%", marginBottom: 20 }}>
                        <Button
                            title={"Submit"}
                            onPress={DriverRegiser}
                            Style={{ width: '100%' }} />
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    main: { flexDirection: 'row', width: "100%" },
    submain: { justifyContent: "center", width: "80%" },
    sub: { justifyContent: "center", width: "20%" },
    phototext: {
        fontSize: 16,
        width: '80%',
        fontWeight: "bold",
        color: '#fff'
    },
    phototext2: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff',
        marginTop: 20, marginLeft: 25
    },
    inputphot: {
        marginTop: 10

    }

})

export default DriverDocumentuplaod;