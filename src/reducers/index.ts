import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import mineReducer from './mineReducers';
import listReducer from './listReducer';

export default combineReducers({
  homeReducer,
  mineReducer,
  listReducer
});
