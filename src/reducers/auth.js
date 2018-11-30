import * as types from '../actions';

const initialState = {
  user: {},
};
export default (state = initialState, action) => {
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
