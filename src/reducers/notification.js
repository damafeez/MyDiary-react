import * as types from '../actions';
import initialState from '../initialState';

const defaultNotification = {
  message: 'Something happened',
  timeout: 5000,
  status: 'success',
};
export default (state = initialState.notification, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return {
        ...state,
        payload: { ...defaultNotification, ...action.payload },
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
