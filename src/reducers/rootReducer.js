import { combineReducers } from 'redux';
import userData from './userReducer';
import postData from './postReducer';

const rootReducer = combineReducers({
  userData: userData,
  postData: postData
});


export default rootReducer;