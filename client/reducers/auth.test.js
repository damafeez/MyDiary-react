import auth from './auth';
import * as types from '../actions';
import initialState from '../initialState';

const state = initialState.auth;
const user = { fullName: 'Afeez Awoyemi', email: 'test@gmail.c', username: 'damafeez' };
const user2 = { fullName: 'Afeez Awoyemi2', email: 'test2@gmail.c' };
describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual(state);
  });
  it('should handle LOGIN', () => {
    expect(
      auth({}, {
        type: types.LOGIN,
        payload: user,
      }),
    ).toEqual({ user });
  });
  it('should handle LOGIN_LOADING', () => {
    expect(
      auth({}, {
        type: types.LOGIN_LOADING,
        payload: true,
      }),
    ).toEqual({ loginLoading: true });
  });
  it('should handle SIGN_UP_LOADING', () => {
    expect(
      auth({}, {
        type: types.SIGN_UP_LOADING,
        payload: true,
      }),
    ).toEqual({ signupLoading: true });
  });
  it('should handle PASSWORD_UPDATE_LOADING', () => {
    expect(
      auth({}, {
        type: types.PASSWORD_UPDATE_LOADING,
        payload: true,
      }),
    ).toEqual({ passwordUpdateLoading: true });
  });
  it('should handle PROFILE_UPDATE_LOADING', () => {
    expect(
      auth({}, {
        type: types.PROFILE_UPDATE_LOADING,
        payload: true,
      }),
    ).toEqual({ profileUpdateLoading: true });
  });
  it('should handle PROFILE_UPDATE', () => {
    expect(
      auth({ user }, {
        type: types.PROFILE_UPDATE,
        payload: user2,
      }),
    ).toEqual({ user: { ...user, ...user2 }, profileUpdateLoading: false });
  });
  it('should handle SIGN_OUT', () => {
    expect(
      auth({ user }, {
        type: types.SIGN_OUT,
      }),
    ).toEqual({ user: {} });
  });
});
