import * as actions from '../actionTypes/loginActionTypes';

const initialState = {
    userId: '',
    userotp: '',
    relation:'',
    userData: [],
    getOTP: [],
    qrcodeimg: [],
    coordinate:[],
    getiottokan:[],
    iotgettokan:[],
    login: false,
    saveLatLong:{},
    postDealerDataCoordinates:{},
    currentLatLong:{},
}
console.log("saveLatLong from loginreducer is",initialState.saveLatLong)
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_USER:

            return {
                ...state,
                login: action.loginStatus,
                userData: action.payload
            }

        case actions.GET_USER_OTP:
            return {
                ...state,
                getOTP: action.payload
            }

        case actions.GET_QR_CODE:
            return {
                ...state,
                qrcodeimg: action.payload
            }
            case actions.GET_IOT_TOKEN:
                return{
                    ...state,
                    getiottokan:action.payload
                }
            case actions.GET_AUTH_TOKAN:
                return{
                    ...state,
                    iotgettokan:action.payload
                }
         case actions.GET_COORDINATE:
            return{
                ...state,
                coordinate:action.payload
            }
        case actions.USER_ERROR:
            return {
                ...state,
                userId: state.userId,
                login: state.loginStatus,
                message: action.message,
                loginFailed: action.payload
            }
        case actions.SAVE_CORDINATE_DATA:
            return {
                ...state,
                saveLatLong:action.payload
                
            }
        case actions.POST_DEALER_DATA_COORDINATES:
            return{
                ...state,
                postDealerDataCoordinates:action.payload
            }

            case actions.SAVE_CURRENT_COORDINATES:
            return{
                ...state,
                currentLatLong:action.payload
            }
        default:
            return state;
    }
}

export default loginReducer