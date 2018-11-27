import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.notification, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return {
        ...state,
        payload: action.payload,
      };
    case types.CLEAR_NOTIFICATION:
      return {
        ...state,
        payload: {},
      };
    default:
      return state;
  }
};
