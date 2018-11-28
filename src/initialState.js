export default {
  auth: {
    user: JSON.parse(localStorage.getItem('user')) || {},
    loginLoading: false,
    signupLoading: false,
  },
  scroller: {
    showAdd: false,
  },
  notification: {
    payload: {},
  },
  entries: {
    createEntryLoading: false,
    getEntriesLoading: false,
    getEntriesError: '',
    entries: JSON.parse(localStorage.getItem('entries')) || [],
    entry: {},
    currentEntry: null,
  },
};
