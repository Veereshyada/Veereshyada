import * as actions from '../actionType/getActionType'
import * as loader from '../actionType/commonActionType'

const intialState = {
    loadingStatus: false,
    data: [],
    project_list: [],
    project_task_list: [],
    timeSheetbyProject:[],
    timesheet_list: [],
    timesheet_list_by_week: [],
    timeoff_list : [],
    company_list : [],
    manager_list : [],
    project_status_list : [],
    project_location_list : [],
    all_projects : [],
    project_data : {},
    policy_list : []

}

const EmployeeReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.DATA_LIST:
            return {
                ...state,
                data: action.payload,

            }

        case actions.PROJECT_LIST :
            return {
                ...state,
                project_list: action.payload
            }
        
        case actions.GET_TIMESHEET_BY_PROJECT :
            return {
                ...state,
                timeSheetbyProject: action.payload
            }
    

        case actions.PROJECT_TASK_LIST :
            return {
                ...state,
                project_task_list: action.payload
            }

        case actions.GET_TIMESHEET :
            return {
                ...state,
                timesheet_list: action.payload
            }

            case actions.GET_TIMESHEET_BY_WEEK :
                return {
                    ...state,
                    timesheet_list_by_week: action.payload
                }

        case actions.GET_TIMEOFF :
            return {
                ...state,
                timeoff_list: action.payload
            }

        case actions.GET_COMPANY :
            return {
                ...state,
                company_list: action.payload
            }

        case actions.GET_MANAGER :
        return {
            ...state,
            manager_list: action.payload
        }

        case actions.PROJECT_STATUS :
            return {
                ...state,
                project_status_list: action.payload
            }

        case actions.PROJECT_LOCATION :
            return {
                ...state,
                project_location_list: action.payload
            }

        case actions.GETTING_PROJECT :
            return {
                ...state,
                all_projects:action.payload
            }

        case actions.GETTING_POLICY :
            return {
                ...state,
                policy_list:action.payload
            }

        case actions.STORING_PROJECT_DATA :
            return {
                ...state,
                project_data:action.payload
            }

        default:
            return state
    }
}
export default EmployeeReducer;
