import * as types from '.';

const signupLoading = (payload = true) => ({ type: types.SIGN_UP_LOADING, payload });
const loginLoading = (payload = true) => ({ type: types.LOGIN_LOADING, payload });

export const signup = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(signupLoading());
    await API.signup(payload);
    dispatch(signupLoading(false));
    return { success: 'Account created successfully' };
  } catch (e) {
    dispatch(signupLoading(false));
    return { error: e.response ? e.response.data.error[0] : true };
  }
};

export const login = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(loginLoading());
    const request = await API.login(payload);
    const { data: user } = request.data;
    localStorage.setItem('user', JSON.stringify(user));
    API.UPDATE_TOKEN(user.token);
    dispatch({ type: types.LOGIN, payload: user });
    dispatch(loginLoading(false));
    return { success: 'Login Successful' };
  } catch (e) {
    dispatch(loginLoading(false));
    return { error: e.response ? e.response.data.error[0] : true };
  }
};

export const signout = () => async (dispatch, getState, API) => {
  localStorage.clear();
  API.UPDATE_TOKEN(null);
  dispatch({ type: types.SIGN_OUT });
};
