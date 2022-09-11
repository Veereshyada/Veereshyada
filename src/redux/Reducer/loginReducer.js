import {USER_LOGIN} from '../ActionType/loginActionType'

const initialState = {
    loginData : []
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGIN :
            return{
                ...state,
                loginData:action.payload
            }
        
        default:
            return state
    }
}

export default LoginReducer