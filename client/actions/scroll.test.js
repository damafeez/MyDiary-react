import * as types from '.';
import scroll from './scroll';

describe('scroll actions', () => {
  const expectedAction = [
    { type: types.SHOW_ADD, payload: false },
  ];
  it('creates SHOW_ADD on call', () => {
    const store = mockStore({});
    store.dispatch(scroll(false));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
