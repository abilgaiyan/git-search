//import mapKeys from 'lodash/mapKeys';
import { SEARCH_SUCCESS, SEARCH_START, SEARCH_FAILURE } from '../actions/actiontypes';
 const initialState = {
   processing: false,
   data:[],
   error:null
 }
export default function(state =initialState, action) {
  switch (action.type) {
    case SEARCH_START:
    //return { ...state, ...mapKeys(action.payload,'id') };
    return { ...state,  processing: true, error:null };
    case SEARCH_SUCCESS:
      //return { ...state, ...mapKeys(action.payload,'id') };
      return { ...state, data: action.payload, processing: false, error:null };
    case SEARCH_SUCCESS:
      //return { ...state, ...mapKeys(action.payload,'id') };
      return { ...state,  processing: false, error:action.payload };  
    default:
      return state;
  }
}
