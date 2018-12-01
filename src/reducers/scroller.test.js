import scroller from './scroller';
import * as types from '../actions';
import initialState from '../initialState';

const state = initialState.scroller;

describe('scroller reducer', () => {
  it('should return the initial state', () => {
    expect(scroller(undefined, {})).toEqual(state);
  });
  it('should handle SHOW_ADD', () => {
    expect(
      scroller({}, {
        type: types.SHOW_ADD,
        payload: true,
      }),
    ).toEqual({
      showAdd: true,
    });
  });
});
