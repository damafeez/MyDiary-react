import * as types from '../actions';
import initialState from '../initialState';

const defaultNotification = {
  message: 'Something happened',
  timeout: 5000,
  status: 'success',
};

export default (state = initialState.dialog, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return {
        ...state,
        notification: { ...defaultNotification, ...action.payload },
      };
    case types.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: {},
      };
    case types.CONFIRM_ACTION:
      return {
        ...state,
        confirmAction: action.payload,
      };
    case types.CLEAR_CONFIRM:
      return {
        ...state,
        confirmAction: {},
      };
    default:
      return state;
  }
};
