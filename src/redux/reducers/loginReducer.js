import * as actions from '../actionType/loginActionType'

const initialState={
    userId:'',
    password:'',
    userData:[],
    login:false
}

const loginReducer= (state=initialState, action)=>{

    switch(action.type){
        case actions.GET_USER:
            return{
                ...state,
                login:action.loginStatus,
                userData:action.payload
            }
        case actions.USER_ERROR:
            return{
                ...state,
                userId: state.userId,
                login: state.loginStatus,
                message :action.message,
                loginFailed: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer