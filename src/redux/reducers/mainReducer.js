import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import EmployeeReducer from "./employeeReducer";
import postReducer from "./postReducer";
import CommonReducer from "./commonReducer";

const rootReducer=combineReducers({
    commonReducer : CommonReducer,
    loginReducer:loginReducer,
    EmployeeReducer:EmployeeReducer,
    postReducer:postReducer
})

export default rootReducer