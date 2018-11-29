import * as types from '.';

const entryCreateLoading = (payload = true) => ({ type: types.ENTRY_CREATE_LOADING, payload });
const getEntriesLoading = (payload = true) => ({ type: types.GET_ENTRIES_LOADING, payload });
const setNotification = (payload) => ({ type: types.SET_NOTIFICATION, payload });

export const createEntry = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(entryCreateLoading());
    const request = await API.createEntry(payload);
    dispatch({ type: types.ENTRY_CREATE_SUCCESS, payload: request.data.data });
    return { success: 'Entry created successfully' };
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error creating entry, please try again';
    dispatch(entryCreateLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const getEntries = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(getEntriesLoading());
    const request = await API.getEntries(payload);
    const { data: entries } = request.data;
    dispatch({ type: types.GET_ENTRIES_SUCCESS, payload: entries });
    return localStorage.setItem('entries', JSON.stringify(entries));
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error fetching entries, please refresh';
    dispatch({ type: types.GET_ENTRIES_ERROR, payload: error });
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const deleteEntry = (id, index) => async (dispatch, getState, API) => {
  try {
    await API.deleteEntry(id);
    dispatch({ type: types.DELETE_ENTRY, payload: index });
    setTimeout(() => localStorage.setItem('entries', JSON.stringify(getState().entries.entries)), 1000);
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error deleting entry, please try again';
    dispatch(setNotification({ message: error, status: 'error' }));
  }
};

export const setCurrentEntry = (payload) => async (dispatch) => {
  dispatch({ type: types.SET_CURRENT_ENTRY, payload });
};
