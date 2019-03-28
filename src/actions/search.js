import axios from 'axios';
import {SEARCH_START, SEARCH_SUCCESS,SEARCH_FAILURE} from './actiontypes';


export const gitSearchResult = (query) => async  dispatch => {
    
    dispatch({type:SEARCH_START});
    try{
        const apiUrl = `https://api.github.com/legacy/repos/search/${query}`;
        const res = await axios.get(apiUrl);
        // console.log(res);
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data
     })
   }
    catch(err){
      dispatch({
        type: SEARCH_FAILURE,
        payload: err,
        error:true
       })
  
    }
  }
  
  