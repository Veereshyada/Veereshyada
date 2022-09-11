import * as actions from '../actionTypes/currentPlanActionType';
import * as loader from '../actionTypes/commonActionType';
const initialState ={
    loadingStatus: false,
    currentplans:[]
}


const currentPlanReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.GET_CURRENT_PLAN:
            return{
                ...state,
                currentplans:action.payload
            }
            default:
                return state
    }
}


export default currentPlanReducer;