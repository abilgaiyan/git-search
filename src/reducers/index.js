import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import repoSelectedReducer from './repoSelectedReducer';

export default combineReducers({
  search: searchReducer,
  activeRepo: repoSelectedReducer
});
