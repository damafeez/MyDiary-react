import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
        loginLoading: false,
        signupLoading: false,
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
    case types.PASSWORD_UPDATE_LOADING:
      return {
        ...state,
        passwordUpdateLoading: action.payload,
      };
    case types.PROFILE_UPDATE_LOADING:
      return {
        ...state,
        profileUpdateLoading: action.payload,
      };
    case types.PROFILE_UPDATE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        profileUpdateLoading: false,
      };
    case types.PROFILE_IMAGE_UPDATE_LOADING:
      return {
        ...state,
        profileImageUpdateLoading: action.payload,
      };
    case types.PROFILE_IMAGE_UPDATE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        profileImageUpdateLoading: false,
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
