import * as types from '.';

const signupLoading = (payload = true) => ({ type: types.SIGN_UP_LOADING, payload });
const loginLoading = (payload = true) => ({ type: types.LOGIN_LOADING, payload });
const profileUpdateLoading = (payload = true) => ({ type: types.PROFILE_UPDATE_LOADING, payload });
const setNotification = (payload) => ({ type: types.SET_NOTIFICATION, payload });
const profileImageUpdateLoading = (payload = true) => ({
  type: types.PROFILE_IMAGE_UPDATE_LOADING, payload,
});
const passwordUpdateLoading = (payload = true) => ({
  type: types.PASSWORD_UPDATE_LOADING,
  payload,
});
const setUser = (user, dispatch, API) => {
  localStorage.setItem('user', JSON.stringify(user));
  API.UPDATE_TOKEN(user.token);
  dispatch({ type: types.SET_USER, payload: user });
};

export const signup = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(signupLoading());
    const request = await API.signup(payload);
    const { data: user } = request.data;
    setUser(user, dispatch, API);
    return dispatch(setNotification({ message: 'Account created successfully' }));
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : true;
    dispatch(signupLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const login = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(loginLoading());
    const request = await API.login(payload);
    const { data: user } = request.data;
    setUser(user, dispatch, API);
    return dispatch(setNotification({ message: 'Login Successful' }));
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : true;
    dispatch(loginLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const updateProfile = (payload) => async (dispatch, getState, API) => {
  try {
    dispatch(profileUpdateLoading());
    const request = await API.editProfile(payload);
    const { fullName, email } = request.data.data;
    const user = { fullName, email };
    localStorage.setItem('user', JSON.stringify({ ...getState().auth.user, ...user }));
    dispatch({ type: types.PROFILE_UPDATE, payload: user });
    return dispatch(setNotification({ message: 'Profile successfully updated' }));
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error updating profile, please try again';
    dispatch(profileUpdateLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const updateProfileImage = (payload, setPreview) => async (dispatch, getState, API) => {
  try {
    dispatch(profileImageUpdateLoading());
    const request = await API.updateProfileImage(payload);
    const { data: imageURL } = request.data;
    localStorage.setItem('user', JSON.stringify({ ...getState().auth.user, ...{ image: imageURL } }));
    dispatch({ type: types.PROFILE_IMAGE_UPDATE, payload: { image: imageURL } });
    setPreview(null);
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error updating profile image, please try again';
    dispatch(profileImageUpdateLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    setPreview(null);
    return { error };
  }
};

export const updatePassword = (payload) => async (dispatch, getState, API) => {
  try {
    if (payload.newPassword !== payload.confirmPassword) {
      const error = 'Passwords don\'t match, please confirm new password';
      dispatch(setNotification({ message: error, status: 'error' }));
      return { error };
    }
    dispatch(passwordUpdateLoading());
    await API.updatePassword(payload);
    dispatch(passwordUpdateLoading(false));
    return dispatch(setNotification({ message: 'Your password has been updated' }));
  } catch (e) {
    const error = e.response ? e.response.data.error[0] : 'Error updating password, please try again';
    dispatch(passwordUpdateLoading(false));
    dispatch(setNotification({ message: error, status: 'error' }));
    return { error };
  }
};

export const signout = () => async (dispatch, getState, API) => {
  localStorage.clear();
  API.UPDATE_TOKEN(null);
  dispatch({ type: types.SIGN_OUT });
};
