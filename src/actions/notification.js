import * as types from '.';

export const clear = () => (dispatch) => dispatch({
  type: types.CLEAR_NOTIFICATION,
});

export default (payload = {}) => (dispatch) => dispatch({
  type: types.SET_NOTIFICATION,
  payload,
});
