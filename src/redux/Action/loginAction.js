import { GET } from '../../Utilities/responseHelper'
import {USER_LOGIN} from '../ActionType/loginActionType'
import loginReducer from '../Reducer/loginReducer'

const dispatchAction = (dispatch, actionType, data, error, message) => {
    dispatch({type:actionType, payload: data, message:message })
}

export const getLogin = async() => {
    const url = ""
    const authToken = ""
    try{
        const data = await GET(url, authToken)
        console.log("the data coming through response helper in get login===>", data)
        if(data){
            dispatchAction(dispatch, USER_LOGIN, data, [], "Success")
        }else{
            dispatchAction(dispatch, USER_LOGIN, [], [], "Invalid User")
        }
    }catch(error){
        console.log("the error through catch===>", error)
    }
}