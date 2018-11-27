import * as types from '.';

export default (payload) => (dispatch) => dispatch({
  type: types.SHOW_ADD,
  payload,
});
