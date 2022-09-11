import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
    LoginReducer : LoginReducer
})

export default rootReducer;

