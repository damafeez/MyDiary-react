import { combineReducers } from 'redux';
import auth from './auth';
import scroller from './scroller';
import dialog from './dialog';
import entries from './entries';

export default combineReducers({
  auth,
  scroller,
  dialog,
  entries,
});
