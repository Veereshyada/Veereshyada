// import { POST_DEALER_DATA_COORDINATES } from '../../redux/actionTypes/loginActionTypes';
import { postDealerDataCoordinates, saveCurrentLatLong } from '../../redux/actions/getcurrentplanAction';
export const postDealerDataCoordinatesApi = (item) => dispatch => {
    // console.log("item from Action is called", item)
    dispatch(postDealerDataCoordinates(
        // {"lat2": 28.692180633544922, "lon2": 77.17475891113281}
        {"lat2":parseFloat(item.latitude),"lon2":parseFloat(item.longitude)}
        ))
}

export const savelatLong = item => dispatch => {
    //console.log("item from Action is called", item)
    dispatch(saveCurrentLatLong(
        {"lat":parseFloat(item.latitude),"lon":parseFloat(item.longitude)}
        ))
}