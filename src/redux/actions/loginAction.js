import * as loginActions from '../../redux/actionTypes/loginActionTypes';
import { GET, LOGIN, OTPLOGIN, QRCODE,IotApicall } from '../reducers/responseHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const dispatchAction=(dispatch ,actionType, data, login, error, message)=>{
    dispatch({type:actionType,payload:data, loginStatus:login, message:message});
};

const dispatchActionotp=(dispatch ,actionType, num1, login, error, message)=>{
    dispatch({type:actionType,payload:num1, loginStatus:login, message:message});
};

// Login genreate otp function call

export const  genrateOtp = (num1) => async dispatch =>{
    //console.log("the gerate ot====================================================>",num1)  
    //const URL1 =`auth/loginOtp`;
    //const dataotp = num1;
    try{
        const data1 = await OTPLOGIN(num1);
        if(data1){
            console.log('GET OTP DATA dirver info-------------------------------', data1 );
            dispatchActionotp(dispatch, loginActions.GET_USER_OTP, data1)
            // AsyncStorage.setItem("useridotp", num1.userid) 
            await AsyncStorage.setItem("DriverInfo",JSON.stringify(data1)) 
        }else{
           // alert(dataotpRes.error.message)
            dispatchActionotp(dispatch,loginActions.GET_USER_OTP, data1, [], 'Invalid User !')
        }
    }catch(error){
        console.log(error+  'veeu')
    }
} 

// Login authetication user function call

export const getLogin = (data) => async dispatch=>{
    //console.log("the data====>", data)
    const URL = `auth/verifyOtp`;  
   const datavalue =data;
    try{
        const dataResp = await LOGIN(URL, data);
        //console.log("LOGIN API HIT", dataResp)

        if(dataResp){
           // console.log('GETTING DATA------', dataResp)
            dispatchAction(dispatch, loginActions.GET_USER, dataResp)
          await AsyncStorage.setItem("userid",JSON.stringify(dataResp))
        }
        else{
           
            //alert(dataResp.error.message)
            dispatchAction(dispatch,loginActions.USER_ERROR,dataResp, [], 'Invalid User !')
        }
    }

    catch(error){
        console.log(error+  'veeutt')
    }
}


// qr function call api

const dispatchActionqr=(dispatch ,actionType, qr, login, error, message)=>{
    dispatch({type:actionType,payload:qr, loginStatus:login, message:message});
};

export const  qrCodegerate =()=>async dispatch=>{
    const value = await AsyncStorage.getItem('userid');
    const qrvalue =await JSON.parse(value);
  // console.log("Qr data to send response helper QRCODE===>ajay",qrvalue.OtpVerified)
    const URLqr =`dashboard/qrGenrator`;
    try{
        const dataqrpRes = await QRCODE(URLqr,qrvalue.OtpVerified);
        //console.log("QRCODE  API HIT",dataqrpRes);
        if(dataqrpRes){
            //console.log('GET qrcode DATA---',dataqrpRes );
            dispatchActionqr(dispatch, loginActions.GET_QR_CODE, dataqrpRes);
            await AsyncStorage.setItem("useridotp",JSON.stringify(dataqrpRes)) 
        }else{
            //alert(dataqrpRes.error.message)
            dispatchActionqr(dispatch,loginActions.GET_QR_CODE, dataqrpRes, [], 'Invalid User !')
        }
    }catch(error){
        console.log(error, 'veeu')
    }

} 


// Logout user function call

export const getLogout = () => async dispatch=>{
    const navigation=useNavigation();
    console.log("Log out function called");
    // dispatchAction(dispatch,loginActions.GET_USER, [],true,[])
    // AsyncStorage.c();
    AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    navigation.navigate('Login');
}