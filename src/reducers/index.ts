import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import mineReducer from './mineReducers';

export default combineReducers({
  homeReducer,
  mineReducer
});
