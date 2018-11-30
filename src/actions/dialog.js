import * as types from '.';

export const clear = () => (dispatch) => dispatch({
  type: types.CLEAR_NOTIFICATION,
});

export const setNotification = (payload = {}) => (dispatch) => dispatch({
  type: types.SET_NOTIFICATION,
  payload,
});
export const confirmAction = (message = 'Are you sure?', callback = test) => (dispatch) => dispatch({
  type: types.CONFIRM_ACTION,
  payload: { message, callback },
});

export const cancel = () => (dispatch) => dispatch({
  type: types.CLEAR_CONFIRM,
});
