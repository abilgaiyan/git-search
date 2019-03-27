import mapKeys from 'lodash/mapKeys';
import { SEARCH_SUCCESS } from '../actions/actiontypes';

export default function(state =[], action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      //return { ...state, ...mapKeys(action.payload,'id') };
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
