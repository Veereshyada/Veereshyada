import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import postDealerReducer from './postDealerReducer';
import CommonReducer from "./commonReducer";
import BatteryReducer from "./IotReducer";
import currentPlanReducer from "./currentPlanReducer";
const rootReducer=combineReducers({
    commonReducer : CommonReducer,
    loginReducer:loginReducer,
    postDealerReducer:postDealerReducer,
    BatteryReducer:BatteryReducer,
    currentPlanReducer:currentPlanReducer,
})

export default rootReducer