import * as actions from '../actionType/getActionType'
// import * as loader from '../actionType/commonActionType'

const intialState = {
    loadingStatus: false,
    employeeData: [],
    projectData: [],
    timeOffData: {},
    timeSheetResp: {}
}

const postReducer = (state = intialState, action) => {
    switch(action.type){
        case actions.POST_EMPLOYEE:
            return {
                ...state,
                employeeData: action.payload,
            }

        case actions.ADD_NEW_PROJECT:
            return {
                ...state,
                projectData: action.payload,
            }
        
        case actions.ADD_NEW_TIMEOFF:
            return {
                ...state,
                timeOffData: action.payload,
            }
        case actions.ADD_NEW_TIMESHEET:
            return {
                ...state,
                timeSheetResp: action.payload,
            }
                
        default:
            return state
    }
}

export default postReducer;