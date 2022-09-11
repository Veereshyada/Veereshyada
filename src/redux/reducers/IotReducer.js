import * as actions from '../actionTypes/loginActionTypes';
const initialState ={
    loadingStatus: false,
    BatteyDetails: [],
}

const BatteryReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.GET_VHEICLE_DETAILS:
            return {
                ...state,
                BatteyDetails: action.payload
            }
            default:
                return state
    }
}
export default BatteryReducer;