import * as types from '.';
import {
  signup,
  login,
  updateProfile,
  updateProfileImage,
  updatePassword,
} from './auth';

const setPreviewSuccess = jest.fn();
const setPreviewError = jest.fn();
describe('signup actions', () => {
  const expectedAction = [{ payload: true, type: 'SIGN_UP_LOADING' }, { payload: { user: 'user' }, type: 'SET_USER' }, { payload: { message: 'Account created successfully' }, type: 'SET_NOTIFICATION' }];
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
  const expectedAction = [{ payload: true, type: 'LOGIN_LOADING' }, { payload: { user: 'user' }, type: 'SET_USER' }, { payload: { message: 'Login Successful' }, type: 'SET_NOTIFICATION' }];
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
describe('updateProfileImage actions', () => {
  const expectedAction = [{ payload: true, type: 'PROFILE_IMAGE_UPDATE_LOADING' }, { payload: { image: { user: 'user' } }, type: 'PROFILE_IMAGE_UPDATE' }];
  const errorAction = [{ payload: true, type: 'PROFILE_IMAGE_UPDATE_LOADING' }, { payload: false, type: 'PROFILE_IMAGE_UPDATE_LOADING' }, { payload: { message: 'an error occoured', status: 'error' }, type: 'SET_NOTIFICATION' }];
  it('dispatches appropriate actions on SUCCESS', async () => {
    const store = mockStore({ auth: { user: 'user' } });
    await store.dispatch(updateProfileImage(false, setPreviewSuccess));
    expect(store.getActions()).toEqual(expectedAction);
    expect(setPreviewSuccess).toHaveBeenCalled();
  });
  it('dispatches appropriate actions on ERROR', async () => {
    const store = mockStore({});
    await store.dispatch(updateProfileImage('error', setPreviewError));
    expect(store.getActions()).toEqual(errorAction);
    expect(setPreviewError).toHaveBeenCalled();
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
