//import * as currentAction from '../actionTypes/currentPlanActionType';
import * as loginActions from '../../redux/actionTypes/loginActionTypes';
import {IotApicall, IotTokAn,datcoordinate, datcoordinate2} from '../reducers/responseHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dispatchActiontot = (dispatch, actionType, dataqrpRe, selectedValue, loaderStatus) => {
    dispatch({ type: actionType, payload:dataqrpRe, value: selectedValue, loader: loaderStatus })
}

// export const getcurrentPlan =()=> async dispatch =>{
//     console.log("the get current plan   action is working")
// }

//Iot Api call fuction here ....
export const IotTokendata = ()=>async dispatch =>{
    var details = {
        'grant_type':'client_credentials',
        'client_id':'33OkryzDZsJaXWvFyHkQ2luIdgsoRaGsrwQuUpcZI4hvSvuv7f0KtCsJ2-YjT8B4lA3_0k5GsshAtwsZr71QyA==',
        'client_secret':'lrFxI-iSEg8QI16SDWIwTd_-INO4GzBx1TPj2bOPi2ye443z-bXtUSVrJQ5ZOzst279jUhv-WfBquu9CeKl-yTgJcUfMaTb2'
    };

    var url2 = `api/security/oauth/token`;
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&"); 
    try{
        const dataqrpRep = await IotTokAn (url2,formBody);
        //console.log("IOT GET API tokan HIT",dataqrpRep);
        if(dataqrpRep){
            //console.log('GET qrcode DATA---',dataqrpRes );
            dispatchActiontot(dispatch, loginActions.GET_AUTH_TOKAN, dataqrpRep);
            await AsyncStorage.setItem("genTokan",JSON.stringify(dataqrpRep)) 
        }else{
            //alert(dataqrpRes.error.message)
            dispatchActiontot(dispatch,loginActions.GET_AUTH_TOKAN, dataqrpRep, [], 'Invalid User !')
        }
    }catch(error){
        console.log(error, 'iot')
     }  
 
}

//Iot Api call fuction here....

export const IotTokanApi = (getiotd,getBatteryId) =>async dispatch =>{
    var getdata = [];
   // console.log(getdata,"uuuuuuuuuuuuuuuuuu")
    //console.log(getBatteryId,'====================>Battery Id');
    const url = `iot/api/devices?name=`;
    const tok =await AsyncStorage.getItem("genTokan");
    const gettokan = await JSON.parse(tok)
    if(getiotd!=null){
        getdata.push(getiotd);
    }else{
        getdata.push(gettokan.access_token);
    }
     
    //const getiotdat = getdata; 
    //let  vartt ='131acbbe-7f32-4e09-9208-1c9429b8f1a6';
        try{
            const dataqrpRe = await IotApicall(url,getdata );
            // const dataqrpRe = dataqrp;
            //console.log("IOT API HIT",JSON.stringify(dataqrpRe));
            if(dataqrpRe){
                //console.log('GET qrcode DATA---',dataqrpRes );
                dispatchActiontot(dispatch, loginActions.GET_IOT_TOKEN, dataqrpRe);
                await AsyncStorage.setItem("iotdata",JSON.stringify(dataqrpRe)) 
            }else{
                //alert(dataqrpRes.error.message)
                dispatchActiontot(dispatch,loginActions.GET_IOT_TOKEN, dataqrpRe, [], 'Invalid User !')
            }
        }catch(error){
            console.log(error, 'iot')
         } 
    
   
    
}
export const getcoordinate = (referdata) =>async dispatch =>{
    const value = await AsyncStorage.getItem('userid');
    const qrvalue =await JSON.parse(value);
    //const tokanaa = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2NTg3NjE3ODUsImV4cCI6MTY1ODg0ODE4NX0.S6nxMNqwydYIdomkaUoV5a9Pv0vN4nzQX59X8i8u204'
    
    const URLqr =`dashboard/createReferralData`;
        try{
            const dataqrp = await datcoordinate(URLqr,qrvalue.OtpVerified,referdata);
            // const dataqrpRe = dataqrp;
            //console.log("coordinate API HIT",dataqrp);
            if(dataqrp){
                //console.log('GET qrcode DATA---',dataqrpRes );
                dispatchActiontot(dispatch, loginActions.GET_COORDINATE, dataqrp);
                await AsyncStorage.setItem("iotdata",JSON.stringify(dataqrp)) 
            }else{
                //alert(dataqrpRes.error.message)
                dispatchActiontot(dispatch,loginActions.GET_COORDINATE, dataqrp, [], 'Invalid User !')
            }
        }catch(error){
            console.log(error, 'iot')
         } 
    }

    export const saveLatLong = (referdata) =>async dispatch =>{
        //console.log('referdata', referdata)
        dispatchActiontot(dispatch, loginActions.SAVE_CORDINATE_DATA, referdata)
        
        }
    export const postDealerDataCoordinates = (referdata) =>async dispatch =>{

        // console.log("postDealerDataCoordinates postDealerDataCoordinates")
        const value = await AsyncStorage.getItem('userid');
        const qrvalue =await JSON.parse(value);
    //const tokanaa = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2NTg3NjE3ODUsImV4cCI6MTY1ODg0ODE4NX0.S6nxMNqwydYIdomkaUoV5a9Pv0vN4nzQX59X8i8u204'
    
    const URLqr =`dashboard/postDealerDataNewCoordinates`;
        try{
            // console.log("URLqr,qrvalue.OtpVerified,referdata",URLqr,qrvalue.OtpVerified,referdata);
            const dataqrp = await datcoordinate2(URLqr,qrvalue.OtpVerified,referdata);
            // const dataqrpRe = dataqrp;
            // console.log("postDealerDataCoordinates cccccc",dataqrp);
            if(dataqrp){
                //console.log('GET qrcode DATA---',dataqrpRes );
                dispatchActiontot(dispatch, loginActions.POST_DEALER_DATA_COORDINATES, dataqrp);
                // await AsyncStorage.setItem("iotdata",JSON.stringify(dataqrp)) 
            }else{
                //alert(dataqrpRes.error.message)
                dispatchActiontot(dispatch,loginActions.POST_DEALER_DATA_COORDINATES, dataqrp, [], 'Invalid User !')
            }
        }catch(error){
            console.log(error, 'iot')
        } 
        
        }

export const saveCurrentLatLong = (referdata) =>async dispatch =>{
            //console.log('saveCurrentLatLong', referdata)
            dispatchActiontot(dispatch, loginActions.SAVE_CURRENT_COORDINATES, referdata)
            }