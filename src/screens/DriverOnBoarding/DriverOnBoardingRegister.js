import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView,Keyboard } from "react-native";
import TextInputComponent from "../../components/input";
import Button from '../../components/button'
import SelectDropDown from "../../components/SelectDropDown";
import Header from "../../components/header";
import Images from '../../constant/imgurls';
import BackgrounImg from "../../components/BackgroundImg";
import DropList from '../../constant/Dropdownlist'
const DriverOnBoardingRegister = ({ navigation }) => {

    //const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [updata, setUpdata] = React.useState({Drivername:'',adharId:'',mobile_no:'',Asset:''});
    const [errors, setErrors] = React.useState({});
      
    const driverRegister =() =>{
        Keyboard.dismiss();
        if(!updata.Drivername){
            handleError('Please enter Driver Name','Drivername')
        }
        if(!updata.adharId){
            handleError('Please enter Aadhar Card No','adharId')
        }
        if(!updata.mobile_no){
            handleError('Please enter Mobile Number','mobile_no')
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

    const handleOnchange = async (text, input) => {
        //setPhone(updata.password);
    
        setUpdata(prevState => ({ ...prevState, [input]: text }));
    
      };
      const handleError = (error, input) => {
        
        setErrors(prevState => ({ ...prevState, [input]: error }));
      };
     const Validate = ()=>{
        navigation.navigate('Payment')
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

            <ScrollView>
                <BackgrounImg screenName={'Driver onboarding'} />
                <View style={{ alignSelf: 'center', width: '95%',paddingVertical:20 }}>
                    <TextInputComponent
                      onChangeText={text => handleOnchange(text, 'Drivername')}
                      onFocus={() => handleError(null, 'Drivername')}
                       error={errors.Drivername}
                        label="Driver Name"
                        placeholder="Ravi k Singh"
                    />
                    <TextInputComponent
                    onChangeText={text => handleOnchange(text, 'mobile_no')}
                    onFocus={() => handleError(null, 'Dmobile_no')}
                     error={errors.mobile_no}
                        label="Mobile"
                        keyboardType='numeric'
                        placeholder="98200 98200"
                    />
                    <TextInputComponent
                     onChangeText={text => handleOnchange(text, 'adharId')}
                     onFocus={() => handleError(null, 'adharId')}
                      error={errors.adharId}
                        label="Aadhar ID"
                        keyboardType='numeric'
                        placeholder="6375 7532 6372"
                    />
                    <SelectDropDown
                    onSelect={text => { handleOnchange(text, 'Asset') }}
                    onFocus={() => handleError(null, 'Asset')}
                    error={errors.Asset}
                    item={DropList.Driveronboarding.Asset}
                        label='Asset Service' />

                    <View style={{marginTop:20,}}>
                        <Button
                            title={"Submit"}
                            onPress={driverRegister}
                            Style={{ width: '100%' }}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    headerimg: {
        width: '100%',
        height: 200
    },


})
export default DriverOnBoardingRegister;