import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.scroller, action) => {
  switch (action.type) {
    case types.SHOW_ADD:
      return {
        ...state,
        showAdd: action.payload,
      };
    default:
      return state;
  }
};
