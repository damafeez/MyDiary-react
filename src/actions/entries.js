import * as types from '.';

const entryCreateLoading = (payload = true) => ({ type: types.ENTRY_CREATE_LOADING, payload });

// eslint-disable-next-line import/prefer-default-export
export const createEntry = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(entryCreateLoading());
    const request = await API.createEntry(payload);
    dispatch(entryCreateLoading(false));
    dispatch({ type: types.ENTRY_CREATE_SUCCESS, payload: request.data.data });
    return { success: 'Entry created successfully' };
  } catch (e) {
    dispatch(entryCreateLoading(false));
    return { error: e.response ? e.response.data.error[0] : true };
  }
};
