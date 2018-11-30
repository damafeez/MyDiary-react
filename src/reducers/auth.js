import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload,
      };
    case types.SIGN_UP_LOADING:
      return {
        ...state,
        signupLoading: action.payload,
      };
    case types.SIGN_OUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
