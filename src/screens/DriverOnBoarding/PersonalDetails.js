import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Keyboard } from "react-native";
import TextInputComponent from "../../components/input";
import Button from "../../components/button";
import SelectDropDown from "../../components/SelectDropDown";
import AddChild from "../../components/AddChild";
import UploadImage from "../../components/UploadPhoto";
import Header from "../../components/header";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';
import DropList from '../../constant/Dropdownlist'
import { set } from "react-native-reanimated";

const PersonalDetails = ({ navigation }) => {

    const [updata, setUpdata] =
        React.useState({
            residence: '', income: '', age: '',
            Voter_no: '', mydata: ' ', age: '', mStatus: '', DriverOccup: ''
            , MontIncome: '', DriverOccup2: '', OtherMonthly: '', workingYears: '', N_members: '',
            S_Phone: '', BankAc: '', BankName: '', Nchildren: ''
        });

    const [errors, setErrors] = React.useState({});
    const [dropdata, setDropdata] = React.useState('');

    console.log('=====================================>', updata.mydata);
    const PersonalRegiser = () => {
        Keyboard.dismiss();
        if (!updata.residence) {
            handleError('Please enter residence', 'residence')
        }
        if (!updata.income) {
            handleError('Please enter income', 'income')
        }
        if (!updata.age) {
            handleError('Please enter Pan Card No', 'age')
        }
        // if(!updata.Voter_no){
        //     handleError('Please enter Voter Id','Voter_no')
        // }
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
    const [num, setNum] = useState(0);
    // const [add, setAdd] = useState('');
    function addcount() {
        setNum(num + 1);
    }
    function increament() {
        setNum(num - 1);
    }
    console.log(num, "count")

    const Validate = () => {
        navigation.navigate("VechileDetails")
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackgrundText
                    HeadingName={"Personal Details"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
                <View style={{ marginVertical: 20, width: '95%', alignSelf: 'center' }}>
                    <SelectDropDown
                        item={DropList.personaldetail.Age}
                        onSelect={text => { handleOnchange(text, 'age') }}
                        onFocus={() => handleError(null, 'age')}
                        label='Age'
                        error={errors.age} />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'mStatus') }}
                        item={DropList.personaldetail.Maritalstatus}
                        label='Marital Status' />

                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'residence')}
                        onFocus={() => handleError(null, 'residence')}
                        error={errors.residence}
                        label='Residence'
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'DriverOccup') }}
                        item={DropList.personaldetail.Occupation}
                        label='Occupation As Driver' />
                    <TextInputComponent
                        onChangeText={text => handleOnchange(text, 'income')}
                        onFocus={() => handleError(null, 'income')}
                        error={errors.income}
                        keyboardType='numeric'
                        label='Monthly Income'
                    />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'MontIncome') }}
                        item={DropList.personaldetail.Occupation}
                        label='Occupation As Driver' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'DriverOccup2') }}
                        item={DropList.personaldetail.Liability}
                        label='Other Monthly Liability' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'OtherMonthly') }}
                        item={DropList.personaldetail.Wokingyears}
                        label='Woking Years' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'workingYears') }}
                        item={DropList.personaldetail.MembersFamily}
                        label='Number of Members in Family' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'N_members') }}
                        item={DropList.personaldetail.EarningMembers}
                        label='Number of Earning Members' />
                    <SelectDropDown
                     item={DropList.personaldetail.smartPhone}
                        onSelect={text => { handleOnchange(text, 'S_Phone') }}
                        label='Smart Phone - Own Currently' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'BankAc') }}
                        item={DropList.personaldetail.smartPhone}
                        label='Bank Account' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'BankName') }}
                        item={DropList.personaldetail.BankName}
                        label='Bank Name' />
                    <SelectDropDown
                        onSelect={text => { handleOnchange(text, 'Nchildren') }}
                        item={DropList.personaldetail.Children}
                        label='No. of Children' />

                    <AddChild
                        male='M'
                        count='10' />
                    <AddChild
                        male='F'
                        onPress2={increament}
                        count='5'
                        onPress1={addcount} />
                    <AddChild
                        male='F'
                        count={num} />
                    <View style={{ marginTop: 40 }}>
                        <Button
                            title={"Submit"}
                            onPress={PersonalRegiser}
                            Style={{ width: '90%' }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalDetails;