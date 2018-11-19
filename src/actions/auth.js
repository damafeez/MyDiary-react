/* eslint-disable import/prefer-default-export */
import ApiClass from '../API';

const API = new ApiClass();

export const signup = async (payload) => {
  try {
    await API.signup(payload);
    return { success: 'Account created successfully' };
  } catch (e) {
    return { error: e.response ? e.response.data.error[0] : true };
  }
};

export const login = async (payload) => {
  try {
    const request = await API.login(payload);
    localStorage.setItem('user', JSON.stringify(request.data.data));
    return { success: 'Login Successful' };
  } catch (e) {
    return { error: e.response ? e.response.data.error[0] : true };
  }
};
