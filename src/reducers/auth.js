import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};