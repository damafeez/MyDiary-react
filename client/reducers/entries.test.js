import entries from './entries';
import * as types from '../actions';
import initialState from '../initialState';

const state = initialState.entries;
const entry = { id: 1, title: 'this title', body: 'this body' };

describe('entries reducer', () => {
  it('should return the initial state', () => {
    expect(entries(undefined, {})).toEqual(state);
  });
  it('should handle ENTRY_CREATE_LOADING', () => {
    expect(
      entries({}, {
        type: types.ENTRY_CREATE_LOADING,
        payload: true,
      }),
    ).toEqual({
      createEntryLoading: true,
    });
  });
  it('should handle ENTRY_CREATE_SUCCESS', () => {
    expect(
      entries({ entries: [] }, {
        type: types.ENTRY_CREATE_SUCCESS,
        payload: entry,
      }),
    ).toEqual({
      entries: [entry],
      createEntryLoading: false,
      currentEntry: 0,
    });
  });
  it('should handle GET_ENTRIES_LOADING', () => {
    expect(
      entries({}, {
        type: types.GET_ENTRIES_LOADING,
        payload: true,
      }),
    ).toEqual({
      getEntriesLoading: true,
    });
  });
  it('should handle GET_ENTRIES_SUCCESS', () => {
    expect(
      entries({}, {
        type: types.GET_ENTRIES_SUCCESS,
        payload: [entry],
      }),
    ).toEqual({
      entries: [entry],
      getEntriesLoading: false,
      getEntriesError: '',
      currentEntry: 0,
    });
  });
  it('should handle GET_ENTRIES_ERROR', () => {
    expect(
      entries({}, {
        type: types.GET_ENTRIES_ERROR,
        payload: 'an error occoured',
      }),
    ).toEqual({
      getEntriesError: 'an error occoured',
      getEntriesLoading: false,
    });
  });
  it('should handle ENTRY_UPDATE_SUCCESS', () => {
    expect(
      entries({ entries: [entry] }, {
        type: types.ENTRY_UPDATE_SUCCESS,
        payload: { index: 0, data: { ...entry, title: 'updated' } },
      }),
    ).toEqual({ createEntryLoading: false, entries: [{ body: 'this body', id: 1, title: 'updated' }] });
  });
  it('should handle DELETE_ENTRY', () => {
    expect(
      entries({ entries: [entry], currentEntry: 0 }, {
        type: types.DELETE_ENTRY,
        payload: 0,
      }),
    ).toEqual({ currentEntry: 0, entries: [] });
  });
  it('should handle SET_CURRENT_ENTRY', () => {
    expect(
      entries({ }, {
        type: types.SET_CURRENT_ENTRY,
        payload: 2,
      }),
    ).toEqual({ currentEntry: 2 });
  });
  it('should handle SIGN_OUT', () => {
    expect(
      entries({ }, {
        type: types.SIGN_OUT,
      }),
    ).toEqual({ entries: [], entry: {} });
  });
});
