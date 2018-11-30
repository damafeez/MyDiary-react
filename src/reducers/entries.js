import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.entries, action) => {
  switch (action.type) {
    case types.ENTRY_CREATE_LOADING:
      return {
        ...state,
        createEntryLoading: action.payload,
      };
    default:
      return state;
  }
};
