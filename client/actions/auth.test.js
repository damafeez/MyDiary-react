import * as types from '.';
import {
  signup,
  login,
  updateProfile,
  updatePassword,
} from './auth';

describe('signup actions', () => {
  const expectedAction = [
    { payload: true, type: types.SIGN_UP_LOADING },
    { payload: false, type: types.SIGN_UP_LOADING },
    { payload: { message: 'Account created successfully' }, type: types.SET_NOTIFICATION },
  ];
  const errorAction = [
    { payload: true, type: types.SIGN_UP_LOADING },
    { payload: false, type: types.SIGN_UP_LOADING },
    { payload: { message: 'an error occoured', status: 'error' }, type: types.SET_NOTIFICATION },
  ];
  it('dispatches appropriate actions on SUCCESS', async () => {
    const store = mockStore({});
    await store.dispatch(signup(false));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('dispatches appropriate actions on ERROR', async () => {
    const store = mockStore({});
    await store.dispatch(signup('error'));
    expect(store.getActions()).toEqual(errorAction);
  });
});
describe('login actions', () => {
  const expectedAction = [
    { payload: true, type: types.LOGIN_LOADING },
    { payload: { user: 'user' }, type: types.LOGIN },
    { payload: false, type: types.LOGIN_LOADING },
    { payload: { message: 'Login Successful' }, type: types.SET_NOTIFICATION }];
  const errorAction = [
    { payload: true, type: types.LOGIN_LOADING },
    { payload: false, type: types.LOGIN_LOADING },
    { payload: { message: 'an error occoured', status: 'error' }, type: types.SET_NOTIFICATION },
  ];
  it('dispatches appropriate actions on SUCCESS', async () => {
    const store = mockStore({});
    await store.dispatch(login(false));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('dispatches appropriate actions on ERROR', async () => {
    const store = mockStore({});
    await store.dispatch(login('error'));
    expect(store.getActions()).toEqual(errorAction);
  });
});
describe('updateProfile actions', () => {
  const expectedAction = [
    { payload: true, type: types.PROFILE_UPDATE_LOADING },
    { payload: { email: undefined, fullName: undefined }, type: types.PROFILE_UPDATE },
    { payload: { message: 'Profile successfully updated' }, type: types.SET_NOTIFICATION },
  ];
  const errorAction = [
    { payload: true, type: types.PROFILE_UPDATE_LOADING },
    { payload: false, type: types.PROFILE_UPDATE_LOADING },
    { payload: { message: 'an error occoured', status: 'error' }, type: types.SET_NOTIFICATION },
  ];
  it('dispatches appropriate actions on SUCCESS', async () => {
    const store = mockStore({ auth: { user: 'user' } });
    await store.dispatch(updateProfile(false));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('dispatches appropriate actions on ERROR', async () => {
    const store = mockStore({});
    await store.dispatch(updateProfile('error'));
    expect(store.getActions()).toEqual(errorAction);
  });
});
describe('updatePassword actions', () => {
  const errorAction = [
    { payload: true, type: 'PASSWORD_UPDATE_LOADING' },
    { payload: false, type: 'PASSWORD_UPDATE_LOADING' },
    { payload: { message: 'an error occoured', status: 'error' }, type: 'SET_NOTIFICATION' }];
  it('dispatches appropriate actions on SUCCESS', async () => {
    const store = mockStore({ auth: { user: 'user' } });
    await store.dispatch(updatePassword(false));
  });
  it('dispatches appropriate actions on ERROR', async () => {
    const store = mockStore({});
    await store.dispatch(updatePassword('error'));
    expect(store.getActions()).toEqual(errorAction);
  });
});
