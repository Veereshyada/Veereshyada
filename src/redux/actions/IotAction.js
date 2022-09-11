import * as IotActions from '../actionTypes/loginActionTypes';
import { } from '../reducers/responseHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dispatchAction = (dispatch, actionType, data, selectedValue, loaderStatus) => {
    dispatch({ type: actionType, payload: data, value: selectedValue, loader: loaderStatus })
}

export const getcurrentPlan =()=> async dispatch =>{
    console.log("the get current plan   action is working")
}