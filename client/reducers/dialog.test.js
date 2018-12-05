import dialog from './dialog';
import * as types from '../actions';
import initialState from '../initialState';

const state = initialState.dialog;
const callback = jest.fn();

describe('dialog reducer', () => {
  it('should return the initial state', () => {
    expect(dialog(undefined, {})).toEqual(state);
  });
  it('should handle SET_NOTIFICATION', () => {
    expect(
      dialog({}, {
        type: types.SET_NOTIFICATION,
        payload: { message: 'Test notification' },
      }),
    ).toEqual({
      notification: {
        message: 'Test notification',
        timeout: 5000,
        status: 'success',
      },
    });
  });
  it('should handle CLEAR_NOTIFICATION', () => {
    expect(
      dialog({}, {
        type: types.CLEAR_NOTIFICATION,
      }),
    ).toEqual({
      notification: {},
    });
  });
  it('should handle CONFIRM_ACTION', () => {
    expect(
      dialog({}, {
        type: types.CONFIRM_ACTION,
        payload: { callback, message: 'mdess' },
      }),
    ).toEqual({
      confirmAction: { callback, message: 'mdess' },
    });
  });
  it('should handle CLEAR_CONFIRM', () => {
    expect(
      dialog({}, {
        type: types.CLEAR_CONFIRM,
      }),
    ).toEqual({
      confirmAction: {},
    });
  });
});
