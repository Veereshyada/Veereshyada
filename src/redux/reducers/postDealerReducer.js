import { postDealerDataCoordinates } from '../actions/getcurrentplanAction';
import * as actions from '../actionTypes/loginActionTypes';

const initialState = {
    postDealerDataCoordinates:{},
    radius:""
}

const postDealerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.POST_DEALER_DATA_COORDINATES:
           console.log("postDealerReducer is called ",action.payload)

           let arr = [];
   
           let suggestedLocation = []
       
           for(var j = 0 ; j< action.payload.stations.length;j++){
             let arr = [ action.payload.stations[j].longitude, action.payload.stations[j].latitude]
             suggestedLocation.push(arr)
           }

           console.log("action.payload.stations.length",action.payload.stations.length, suggestedLocation)
       
         
           for (let i = 0; i < suggestedLocation.length; i++) {
               arr.push({
                   type: 'Feature',
                   id: i,
                   geometry: {
                       coordinates:
                           suggestedLocation[i]
                       ,
                       type: 'Point',
                   },
               });
           }
    
           
            return{
                ...state,
                postDealerDataCoordinates: {
                    type: 'FeatureCollection',
                    features: arr,
                },
                radius:action.payload.radius
            }
        default:
            return state;
    }
}

export default postDealerReducer