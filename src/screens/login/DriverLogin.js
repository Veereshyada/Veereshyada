import 'react-native-gesture-handler';
import React, { useEffect, useMemo } from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert, TouchableOpacity, Image, Platform } from 'react-native';
import COLORS from '../../Constants/color';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader';
import { useTranslation } from "react-i18next";
import { genrateOtp, getLogin } from '../../redux/actions/loginAction'
import { useDispatch, useSelector } from 'react-redux';
import {IotTokendata} from '../../redux/actions/getcurrentplanAction';


const DriverLogin = ({ navigation }) => {
  const { t } = useTranslation();
  const [inputs, setInputs] = React.useState({ DriverID: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [shouldShow, setShouldShow] = React.useState(false);
  const [shouldNotShow, setShouldNotShow] = React.useState(true);
  const [phone, setPhone] = React.useState('');
  const [getotp, setOtp] = React.useState('');
  const [incorrect, setErrorotp] = React.useState('');
  const dispatch = useDispatch();




  const { getOTP } = useSelector((state) => ({
    getOTP: state.loginReducer.getOTP,
  }))
  console.log("USERDATA FROM REDUCER IS", getOTP)

  // get tokan =============================>
  const { datas } = useSelector((state) => ({ datas: state.loginReducer.userData, }
  ))
  // console.log(datas, "login screenn------>")
  const data = getOTP !== undefined && getOTP !== null && getOTP !== '';

  //send otp send varification  function call

  const validate = async () => {
    Keyboard.dismiss();
    console.log(inputs.DriverID, "getting dirver id from user");
    const n_umb = inputs.DriverID;
    let isValid = true;
    if (!inputs.DriverID) {
      handleError('Please input Valid Driver ID', 'DriverID');
      isValid = false;
    }
    if (n_umb != '') {
      //alert('hello')
      dispatch(genrateOtp(n_umb))
    }
    if (isValid) {
      setShouldShow(!shouldShow)
      setShouldNotShow(!shouldNotShow)
    }
  }
  //otp and userid vailidation function call
 useEffect (async () => {
    let valData = await AsyncStorage.getItem("UserId")
    console.log("Asyn data is ", valData)
 }, [])
  const validateOtp = async () => {
    const datauser = JSON.stringify(getOTP);
    const dataotp = JSON.parse(datauser);
    console.log(dataotp,'data is comming--------------------');

    Keyboard.dismiss();
    const n_umbe = inputs.DriverID;
    let isValid = true;
    if (getotp != dataotp.data.code) {
      handleError("Invalid OTP Please Enter a Valid OTP", "password");
      isValid = false;
    }
    if (getotp == dataotp.data.code) {
      const data = {
        userid: n_umbe,
        userOtp: getotp
      }
      dispatch(getLogin(data))
      login();
    }
  };
  //login after loading replace home screen function 
  const login = async() => {
    try {
      const n_umb = inputs.DriverID;
      await AsyncStorage.setItem('UserId', n_umb)
    } catch (e) {
      // saving error
    }
    dispatch(IotTokendata());
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      navigation.replace('MainScreen');
    },2000);
  };
  const handleOnchange = async (text, input) => {
    setPhone(inputs.DriverID);
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.skyblue, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Image source={require('../../assets/LOGO.png')} style={{ width: Platform.OS == 'android' ? '95%' : '66%', height: Platform.OS == 'ios' ? 45: 52, alignSelf: 'center', marginTop: 50 }} />
        <View style={{ marginTop: Platform.OS == 'ios' ? 100 : 150 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: 'white', marginBottom: 30 }}>{t('loginhere')}</Text>
          <Input
            len={10}
            onChangeText={text => handleOnchange(text, 'DriverID')}
            onFocus={() => handleError(null, 'DriverID')}
            iconName="account"
            label="account"
            placeholder={t("p_number")}
            error={errors.DriverID}
          />

          {shouldShow ?
            (
              <View>
                <Input
                  len={4}
                  onChangeText={text => setOtp(text, 'password')}
                  onFocus={() => handleError(null, 'password')}
                  iconName="lock"
                  label="Password"
                  placeholder={t("enter_otp")}
                  error={errors.password}
                  password
                />
                <Text style={{ paddingBottom: 20, color: 'red', fontSize: 12 }}>{incorrect}</Text>
                <Button title={t("login")} onPress={validateOtp} />
                <TouchableOpacity onPress={validate}>
                  <Text style={{ alignSelf: 'center', marginTop: 15, fontSize: 16, color: 'white' }}>{t('Resend_Otp')}</Text>
                </TouchableOpacity>
              </View>
            ) : true}
          {shouldNotShow ?
            (
              <Button title={t("Send_OTP")} onPress={validate} />
            ) : false}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriverLogin;
