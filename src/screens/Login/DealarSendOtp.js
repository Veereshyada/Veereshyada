
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView,TouchableOpacity,Keyboard } from "react-native";

import TextInputComponent from "../../components/input";
import Button from "../../components/button";
import Header from "../../components/header";
import Loader from '../../components/Loader';
import BackgroundImg from "../../components/BackgroundImg";
import Images from "../../constant/imgurls";
import COLORS from '../../constant/color';

const DealarSendOtp = ({navigation}) => {
    const [sendId,setPhone] = useState('');
    const [inputs, setInputs] = React.useState({ DriverID: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [incorrect, setErrorotp] = React.useState('');
    const [loading, setLoading] = React.useState(false);

const senOtpDriverId =()=>{
    Keyboard.dismiss();
    //const n_umb = inputs.DriverID;
    let isValid = true;
    if (!inputs.DriverID) {
        handleError('Please input Valid Dealer ID', 'DriverID');
        
    }
     
    if (!inputs.DriverID=='D1454') {
      handleError('Incorrect Dealer ID', 'DriverID');
      isValid = false;
    }else if(inputs.DriverID=='D1454'){                                 
      login();
    }
      
console.log(inputs.DriverID);
}


const login = async() => {
    // try {
    //   const n_umb = inputs.DriverID;
    //   await AsyncStorage.setItem('UserId', n_umb)
    // } catch (e) {
    //   // saving error
    // }
    //dispatch(IotTokendata());
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      navigation.replace('DriverOnBoardingOtpValidation');

    },2000);
  };

    // const Back = () => {
    //     navigation.navigate("Home1")
    // }
    // const Settings = () => {
    //     navigation.navigate("Settings")
    // }
    // const Notification = () => {
    //     navigation.navigate("Notifications")
    // }
    // const GoHome = () => {
    //     navigation.navigate("Home1")
    // }
    const handleOnchange = async (text, input) => {
        setPhone(inputs.DriverID);
    
        setInputs(prevState => ({ ...prevState, [input]: text }));
    
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
      };
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: "#003B4D" }}>
            <Loader visible={loading} />
      <View>
        <BackgroundImg
          screenName={'Dealer Login'}>

        </BackgroundImg>
      </View>
      <ScrollView >
        <View style={{ marginVertical: 20, width: '95%', alignSelf: "center" }}>
          <TextInputComponent
            len={10}
            onChangeText={text => handleOnchange(text, 'DriverID')}
            onFocus={() => handleError(null, 'DriverID')}
            error={errors.DriverID}
            label='Dealer ID'
          />
          <Text style={{ paddingBottom: 20, color: 'red', fontSize: 12 }}>{incorrect}</Text>
        
            <TouchableOpacity onPress={senOtpDriverId} style={styles.btnotp}>
              <Text style={styles.genrateotp}>Generate OTP</Text>
            </TouchableOpacity>
            
          <View style={{ marginTop: '40%' }}></View>
          <Button title='Submit' Style={{ width: '60%' }} onPress={senOtpDriverId} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  btnotp: {
    backgroundColor: '#fff',
    color: 'gray',
    width: '60%',
    alignSelf:"center",
    height: 50,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  genrateotp: {
    fontSize: 16,
    fontWeight: 'bold',
    color:COLORS.silver,
    textAlign: 'center',
  }
})
export default DealarSendOtp;