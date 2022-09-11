import * as commonAction from '../actionType/commonActionType';
import * as list from '../actionType/getActionType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { POST_ADDING_PROJECT, POST_ADD_TIMEOFF, POST_EMPLOYEE } from '../responseHelper';

const dispatchAction = (dispatch, actionType, data, selectedValue, loaderStatus) => {
    dispatch({ type: actionType, payload: data, value: selectedValue, loader: loaderStatus })
}

// POST EMPLOYEE LIST ACTION
export const postEmployee = (body) => async dispatch => {
    // console.log("the post employee action is working", body)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    // let email = await AsyncStorage.getItem('userEmail')
    // console.log("the email===>", email)
    const url = `script=570&deploy=1`
    try{
        const postEmployeeList = await POST_EMPLOYEE(url, body)
        // console.log("the employee list in post action page====>", postEmployeeList)

        if (postEmployeeList) {
            dispatchAction(dispatch, list.POST_EMPLOYEE, postEmployeeList, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        } else {
            dispatchAction(dispatch, list.POST_EMPLOYEE, postEmployeeList, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in post action page ====>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// POST ADDING NEW PROJECT
export const addNewProject = (body) => async dispatch => {
    // console.log("the post employee action is working", body)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    // let email = await AsyncStorage.getItem('userEmail')
    // console.log("the email===>", email)
    const url = `script=570&deploy=1`
    try{
        const addNewProjectList = await POST_ADDING_PROJECT(url, body)
        // console.log("the add new project list in post action page====>", addNewProjectList)

        if (addNewProjectList !== [] && addNewProjectList !== {}) {
            alert(addNewProjectList?.title)
            dispatchAction(dispatch, list.ADD_NEW_PROJECT, addNewProjectList, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        } else {
            dispatchAction(dispatch, list.ADD_NEW_PROJECT, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in post action page ====>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// POST ADDING NEW TIME OFF
export const addNewTimeOff = (body) => async dispatch => {
    console.log("the post employee action is working", body)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    // let email = await AsyncStorage.getItem('userEmail')
    // console.log("the email===>", email)
    const url = `script=570&deploy=1`
    try{
        const addNewTimeOffList = await POST_ADD_TIMEOFF(url, body)
        console.log("the add new project list in post action page====>----------------------------", addNewTimeOffList)

        if (addNewTimeOffList !== [] && addNewTimeOffList !== {}) {
            alert(addNewTimeOffList?.title)
            dispatchAction(dispatch, list.ADD_NEW_TIMEOFF, addNewTimeOffList, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        } else {
            alert(addNewTimeOffList?.title)
            dispatchAction(dispatch, list.ADD_NEW_TIMEOFF, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in post action page ====>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// reset TimeOff
export const resetTimeOff = () => async dispatch => {
    console.log("the post reste")
    dispatchAction(dispatch, list.ADD_NEW_TIMEOFF, {}, null, null)
}

// POST ADDING NEW TIME SHEET
export const addNewTimeSheet = (body) => async dispatch => {
    console.log("the post employee action is working", body)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    // let email = await AsyncStorage.getItem('userEmail')
    // console.log("the email===>", email)
    const url = `script=570&deploy=1`
    try{
        const addNewTimeSheetList = await POST_ADD_TIMEOFF(url, body)
        // console.log("the add new project list in post action page====>", addNewProjectList)

        if (addNewTimeSheetList !== [] && addNewTimeSheetList !== {}) {
            alert(addNewTimeSheetList?.title)
            dispatchAction(dispatch, list.ADD_NEW_TIMESHEET, addNewTimeSheetList, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        } else {
            alert(addNewTimeSheetList?.title)
            dispatchAction(dispatch, list.ADD_NEW_TIMESHEET, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in post action page ====>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// reset TimeOff
export const resetTimeSheet = () => async dispatch => {
    console.log("the post reste")
    dispatchAction(dispatch, list.ADD_NEW_TIMESHEET, {}, null, null)
}