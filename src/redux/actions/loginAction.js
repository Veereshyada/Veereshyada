import * as loginActions from '../actionType/loginActionType'
import { GET, LOGIN } from '../responseHelper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const dispatchAction=(dispatch ,actionType, data, login, error, message)=>{
    dispatch({type:actionType,payload:data, loginStatus:login, message:message});
};


export const getLogin = (data) => async dispatch=>{
    console.log("the data====>", data)
    const URL = `script=570&deploy=1`   

    try{
        const dataResp = await LOGIN(URL, data);
        console.log("LOGIN API HIT", dataResp)

        if(dataResp.error.message == "Plaintext credentials authentication is deprecated for new restlets."){
            dispatchAction(dispatch,loginActions.GET_USER,dataResp,true,[])
            AsyncStorage.setItem("userEmail", data.userEmail)
        }
        else{
            alert(dataResp.error.message)
            dispatchAction(dispatch,loginActions.USER_ERROR,dataResp, [], 'Invalid User !')
        }
    }

    catch(error){
        alert(error+'')
    }
}

export const getLogout = () => async dispatch=>{
    console.log("Log out function called");
    dispatchAction(dispatch,loginActions.GET_USER,[],true,[])
}