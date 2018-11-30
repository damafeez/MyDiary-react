import * as types from '.';

export const clear = () => (dispatch) => dispatch({
  type: types.CLEAR_NOTIFICATION,
});

export default ({
  message = 'Something happened',
  timeout = 5000,
  status = 'success',
}) => (dispatch) => dispatch({
  type: types.SET_NOTIFICATION,
  payload: {
    message,
    timeout,
    status,
  },
});
