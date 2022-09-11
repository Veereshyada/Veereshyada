import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import DatePickerCustom from "../../components/DatePickerCustom";
import CheckBox from '@react-native-community/checkbox';
import SelectDropDown from "../../components/SelectDropDown";
import TextInputComponent from '../../components/input';
import Button from '../../components/button';
import UploadImage from "../../components/UploadPhoto";
import Header from "../../components/header";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';
import DropList from '../../constant/Dropdownlist';
import ImagePicker from 'react-native-image-picker';
import option from '../../constant/options';

const VechileDetails = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(true);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
    const [updata, setUpdata] =
        React.useState({
            VechileType: '', VechileReg: '',registvality:'', ChsisNo: '',
            VechileMake: '', VechileModel: ' ',PurchaseDate:'', VechileFinance: '', FinanceName: '', FinanceContact: ''
            , Insurance: '',InsuranceUpto:''});
    const [errors, setErrors] = React.useState({});

    const Registered = () => {
        
        Keyboard.dismiss();
        if (!updata.VechileType) {
            handleError('Please enter residence', 'VechileType')
        }
        if (!updata.VechileReg) {
            handleError('Please enter income', 'VechileReg')
        }
        if (!updata.ChsisNo) {
            handleError('Please enter Pan Card No', 'ChsisNo')
        }
        if (!updata.VechileMake) {
            handleError('Please enter Voter Id', 'VechileMake')
        }
        if (!updata.VechileModel) {
            handleError('Please enter residence', 'VechileModel')
        }
        if (!updata.VechileFinance) {
            handleError('Please enter income', 'VechileFinance')
        }
        if (!updata.FinanceName) {
            handleError('Please enter Pan Card No', 'FinanceName')
        }
        if (!updata.FinanceContact) {
            handleError('Please enter Voter Id', 'FinanceContact')
        }
        if (!updata.Insurance) {
            handleError('Please enter Voter Id', 'Insurance')
        }

     Validate();

    }

    const regisetrPhoto1 = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };
    const regisetrPhoto2 = () => {
        const options = option;

        ImagePicker.showImagePicker(options, (response) => {
            if (response.uri) {
                setPhoto({ D_Licence_Photo: response.fileName });
            }
        });
    };

    // useEffect(() =>{
    //     if(toggleCheckBox2='true'){
    //         navigation.navigate("VechileDetailsUnregisterd")
    //     }
        
    // },[toggleCheckBox2])


console.log(updata,"date")
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

        navigation.navigate("VechileDetailsUnregisterd")
    }
    const handleOnchange = async (text, input) => {
        //setPhone(updata.password);

        setUpdata(prevState => ({ ...prevState, [input]: text }));

    };
    const handleError = (error, input) => {

        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    console.log(toggleCheckBox, "checked")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#003B4D" }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />
            <ScrollView>
                <BackgrundText
                    HeadingName={"Vehicle Details"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={{ marginVertical: 20, width: '95%', alignSelf: "center" }}>
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'VechileType') }}
                        onFocus={() => handleError(null, 'VechileType')}
                        error={errors.VechileType}
                        item={DropList.Vehicles.Vehicle}
                        label='Vehicle Type'
                    />
                    <View style={{ flexDirection: "row", }}>
                        <CheckBox style={styles.checkbox}
                            tintColors={'green'}
                            onCheckColor={'red'}
                            onFillColor={'yellow'}
                            onTintColor={'#80F4E8'}
                            disabled={true}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.checktext}>Registered</Text>
                        <CheckBox style={styles.checkbox}
                            tintColors={'green'}
                            onCheckColor={'red'}
                            onFillColor={'yellow'}
                            onTintColor={'#80F4E8'}
                            disabled={false}
                            value={toggleCheckBox2}
                            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                        />
                        <Text style={styles.checktext1}>Unregistered</Text>
                    </View>
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'VechileReg') }}
                        onFocus={() => handleError(null, 'VechileReg')}
                        error={errors.VechileReg}
                        item={DropList.Vehicles.vechileRegistation}
                        label='Vehicle Reg. No'
                    />
                    <DatePickerCustom
                        onChangeText={timeSheetRecord => handleOnchange(timeSheetRecord, 'registvality')}
                        onFocus={() => handleError(null, 'registvality')}
                        error={errors.registvality}
                        label='Registration
                  Validity'/>

                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'ChsisNo')}
                        onFocus={() => handleError(null, 'ChsisNo')}
                        error={errors.ChsisNo}
                        label="Chasis No."
                        placeholder=""
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'VechileMake') }}
                        onFocus={() => handleError(null, 'VechileMake')}
                        error={errors.VechileMake}
                        item={DropList.Vehicles.Vehiclemake}
                        label='Vehicle Make'
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'VechileModel') }}
                        onFocus={() => handleError(null, 'VechileModel')}
                        error={errors.VechileModel}
                        item={DropList.Vehicles.VehicleModel}
                        keyboardType='numeric'
                        label='Vehicle Model'
                    />
                    <DatePickerCustom
                    onChangeText={timeSheetRecord => handleOnchange(timeSheetRecord, 'PurchaseDate')}
                    onFocus={() => handleError(null, 'PurchaseDate')}
                    error={errors.PurchaseDate}
                        label='Purchase Date' />

                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'VechileFinance') }}
                        onFocus={() => handleError(null, 'VechileFinance')}
                        error={errors.VechileFinance}
                        item={DropList.Vehicles.VehicleFinanced}
                        label='Vehicle Financed'
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'FinanceName') }}
                        onFocus={() => handleError(null, 'FinanceName')}
                        error={errors.FinanceName}
                        item={DropList.personaldetail.BankName}
                        label='Financer Name'
                    />

                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'FinanceContact')}
                        onFocus={() => handleError(null, 'FinanceContact')}
                        error={errors.FinanceContact}
                        keyboardType='numeric'
                        label="Financer Contact"
                        placeholder=""
                    />

                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'Insurance') }}
                        onFocus={() => handleError(null, 'Insurance')}
                        error={errors.Insurance}
                        item={DropList.Vehicles.VehicleFinanced}
                        label='Insurance Status'
                    />

                    <DatePickerCustom
                       onChangeText={timeSheetRecord => handleOnchange(timeSheetRecord, 'InsuranceUpto')}
                       onFocus={() => handleError(null, 'InsuranceUpto')}
                       error={errors.InsuranceUpto}
                        label='Insurance Upto' />

                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Text style={styles.checktext}>Rc Document</Text>
                        <UploadImage
                        onPress={regisetrPhoto1} 
                        style={{ marginLeft: '28%' }} />
                        <UploadImage
                        onPress={regisetrPhoto2}
                         />

                    </View>


                    <View style={{ marginTop: 40 }}>
                        <Button
                            title={"Submit"}
                            onPress={Registered}
                            Style={{ width: '100%' }}

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

export default VechileDetails;