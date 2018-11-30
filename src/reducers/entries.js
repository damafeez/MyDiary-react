import * as types from '../actions';
import initialState from '../initialState';

export default (state = initialState.entries, action) => {
  switch (action.type) {
    case types.ENTRY_CREATE_LOADING:
      return {
        ...state,
        createEntryLoading: action.payload,
      };
    case types.ENTRY_CREATE_SUCCESS:
      return {
        ...state,
        entries: [action.payload, ...state.entries],
        createEntryLoading: false,
        currentEntry: action.payload.id,
      };
    case types.GET_ENTRIES_LOADING:
      return {
        ...state,
        getEntriesLoading: action.payload,
      };
    case types.GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        getEntriesLoading: false,
        getEntriesError: '',
        currentEntry: action.payload[0].id,
      };
    case types.GET_ENTRIES_ERROR:
      return {
        ...state,
        getEntriesError: action.payload,
        getEntriesLoading: false,
      };
    case types.SET_CURRENT_ENTRY:
      return {
        ...state,
        currentEntry: action.payload,
      };
    default:
      return state;
  }
};
