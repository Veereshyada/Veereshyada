import React from "react";
import * as commonAction from '../actionType/commonActionType';
import * as list from '../actionType/getActionType';
import { GET, GET_COMPANY_LIST, GET_PROJECT, GET_PROJECT_TASK, GET_TIMEOFFAPI, GET_TIMESHEET, GET_ALL_PROJECT, GET_POLICY_LIST } from "../responseHelper";
import AsyncStorage from '@react-native-async-storage/async-storage'

const dispatchAction = (dispatch, actionType, data, selectedValue, loaderStatus) => {
    dispatch({ type: actionType, payload: data, value: selectedValue, loader: loaderStatus })
}

// GET EMPLOYEE LIST ACTION
export const getEmployee = () => async dispatch => {
    console.log("the get employee action is working")
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    let email = await AsyncStorage.getItem('userEmail')
    // console.log("the email===>", email)

    // https://6991251-sb1.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=570&deploy=1&method=getemployee&email=mayankvashistha@elitemindz.co
    const url = `script=570&deploy=1&method=getemployee&email=${email}`
    try{
        const employeeList = await GET(url)
        console.log("the get employee list data====>", employeeList)

        if (employeeList?.status == true) {
            dispatchAction(dispatch, list.DATA_LIST, employeeList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        } else {
            dispatchAction(dispatch, list.DATA_LIST, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in get action page ====>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET PROJECT ACTION
export const getProjectList = (id) => async dispatch => {
    // console.log("the get project list action is working")
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getproject&empid=${id}`
    // const url = 'script=570&deploy=1&method=getproject&empid=7'
    try{
        const projectList = await GET_PROJECT(url)
        // console.log("the get project list only is====>", projectList.response.data)

        if(projectList?.status == true) {
            dispatchAction(dispatch, list.PROJECT_LIST, projectList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.PROJECT_LIST, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get project list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET PROJECT TASK LIST ACTION
export const getProjectTaskList = (id) => async dispatch => {
    // console.log("the get project task list action is working")
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getprojecttask&empid=7&projid=${id}`
    try{
        const projectTaskList = await GET_PROJECT_TASK(url)
        if(projectTaskList?.status == true) {
            dispatchAction(dispatch, list.PROJECT_TASK_LIST, projectTaskList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.PROJECT_TASK_LIST, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get project task list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET TIMESHEET BY PROJECT
export const getTimesheetByProject = (employeeId) => async dispatch => {
    console.log("the get timesheet list action is working in project id-----", employeeId)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=gettimesheetbyproject&empid=${employeeId}`
     //${employeeId}
     //=7
    // const url = `script=570&deploy=1&method=gettimesheet&empid=${employeeId}&projid=${projectId}`
    // script=570&deploy=1&method=gettimesheet&empid=1400
    try{
        const timeSheetList = await GET_TIMESHEET(url)
        // console.log("the time sheet list after api hit====>", timeSheetList)

        if(timeSheetList?.status == true){
            // console.log("if hit")
            dispatchAction(dispatch, list.GET_TIMESHEET_BY_PROJECT, timeSheetList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            // console.log('else hit')
            dispatchAction(dispatch, list.GET_TIMESHEET_BY_PROJECT, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get project list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}


// GET TIMESHEET LIST ACTION
export const getTimeSheet = (projectId, employeeId) => async dispatch => {
    // console.log("the get timesheet list action is working in project id", projectId, "the internal id is====>", employeeId)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=gettimesheet&empid=${employeeId}&projid=${projectId}`
    // const url = `script=570&deploy=1&method=gettimesheet&empid=${employeeId}&projid=${projectId}`
    // script=570&deploy=1&method=gettimesheet&empid=1400
    try{
        const timeSheetList = await GET_TIMESHEET(url)
        // console.log("the time sheet list after api hit====>", timeSheetList)

        if(timeSheetList?.status == true){
            // console.log("if hit")
            dispatchAction(dispatch, list.GET_TIMESHEET, timeSheetList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            // console.log('else hit')
            dispatchAction(dispatch, list.GET_TIMESHEET, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get project list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}


// GET TIMESHEET BY WEEK LIST ACTION
export const getTimeSheetbyWeek = (employeeId) => async dispatch => {
    // console.log("the get timesheet list action is working in project id", projectId, "the internal id is====>", employeeId)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=gettimesheetbyweek&empid=${employeeId}`
    // const url = `script=570&deploy=1&method=gettimesheet&empid=${employeeId}&projid=${projectId}`
    // script=570&deploy=1&method=gettimesheet&empid=1400
    try{
        const timeSheetList = await GET_TIMESHEET(url)
        // console.log("the time sheet list after api hit====>", timeSheetList)

        if(timeSheetList?.status == true){
            // console.log("if hit")
            dispatchAction(dispatch, list.GET_TIMESHEET_BY_WEEK, timeSheetList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            // console.log('else hit')
            dispatchAction(dispatch, list.GET_TIMESHEET_BY_WEEK, {}, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get project list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}


// GET TIMEOFF LIST ACTION
export const getTimeOff = (id) => async dispatch => {
    // console.log("the get timesheet list action is working", id)
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=gettimeoff&empid=${id}`
    // const url = `script=570&deploy=1&method=gettimeoff&empid=1188`
    try{
        const timeOffList = await GET_TIMEOFFAPI(url)
        // console.log("the get time OFF list ====>", timeOffList)

        if(timeOffList?.status == true) {
            dispatchAction(dispatch, list.GET_TIMEOFF, timeOffList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.GET_TIMEOFF, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error of get time off list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET COMPANY LIST
export const getCompany = () => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getcompanylist`
    try{
        const companyList = await GET_COMPANY_LIST(url)
        // console.log("the get COMPANY list ====>", companyList)

        if(companyList?.status == true) {
            dispatchAction(dispatch, list.GET_COMPANY, companyList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.GET_COMPANY, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error IN get COMPANY list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET manager LIST
export const getManager = () => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getprojmgrlist`
    try{
        const managerList = await GET_COMPANY_LIST(url)
        // console.log("the get COMPANY manager list ====>", managerList.response.data)

        if(managerList?.status == true) {
            dispatchAction(dispatch, list.GET_MANAGER, managerList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.GET_MANAGER, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error IN get COMPANY list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET porject Status LIST
export const getProjectStatus = () => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getprojstatuslist`
    try{
        const projectStatusList = await GET_COMPANY_LIST(url)
        // console.log("the get COMPANY project status list ====>", projectStatusList)

        if(projectStatusList?.status == true) {
            dispatchAction(dispatch, list.PROJECT_STATUS, projectStatusList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.PROJECT_STATUS, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error IN get COMPANY list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// GET porject location LIST
export const getProjectLocation = () => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getprojloclist`
    try{
        const projectLocList = await GET_COMPANY_LIST(url)
        // console.log("the get COMPANY project location list ====>", projectLocList)

        if(projectLocList?.status == true) {
            dispatchAction(dispatch, list.PROJECT_LOCATION, projectLocList?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.PROJECT_LOCATION, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log('the error IN get COMPANY list is ----->', error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

//GET PROJECT ACTION
export const getProject = (id) => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getprojlist&empid=${id}`
    // const url = `script=570&deploy=1&method=getprojlist&empid=7`
    try{
        const projects = await GET_ALL_PROJECT(url)
        // console.log("The projects are====>", projects)
        if(projects?.status == true){
            dispatchAction(dispatch, list.GETTING_PROJECT, projects?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.GETTING_PROJECT, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in get project action is ===>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

//GET POLICY CODE FOR TIMEOFF
export const getPolicy = (id) => async dispatch => {
    dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    const url = `script=570&deploy=1&method=getpolicycodelist`
    try{
        const policies = await GET_POLICY_LIST(url)
        // console.log("The policies are====>", policies)
        // console.log("The policies?.response?.data are====>", policies?.response?.data)
        if(policies?.status == true){
            dispatchAction(dispatch, list.GETTING_POLICY, policies?.response?.data, null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.GETTING_POLICY, [], null, null)
            dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in get project action is ===>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}

// FOR STORING DATA
export const storeHomeData = (item) => async dispatch => {
    // console.log("the data in storing in get action===>", item)
    // dispatchAction(dispatch, commonAction.LOADING_SHOW, null, null, true)
    // const url = `script=570&deploy=1&method=getprojlist&empid=${id}`
    // const url = `script=570&deploy=1&method=getprojlist&empid=7`
    try{
        // const projects = await GET_ALL_PROJECT(url)

        if(item !== {} && item !==[] && item !== ""){
            dispatchAction(dispatch, list.STORING_PROJECT_DATA, item, null, null)
            // dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }else{
            dispatchAction(dispatch, list.STORING_PROJECT_DATA, {}, null, null)
            // dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
        }
    }catch(error){
        console.log("the error in get project action is ===>", error)
        dispatchAction(dispatch, commonAction.LOADING_HIDE, null, null, false)
    }
}
