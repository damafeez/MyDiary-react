import { combineReducers } from 'redux';
import auth from './auth';
import scroller from './scroller';

export default combineReducers({
  auth,
  scroller,
});
