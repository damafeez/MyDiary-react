import { combineReducers } from 'redux';
import auth from './auth';
import scroller from './scroller';
import notification from './notification';

export default combineReducers({
  auth,
  scroller,
  notification,
});
