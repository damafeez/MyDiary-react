export default {
  auth: {
    user: JSON.parse(localStorage.getItem('user')) || {},
    loginLoading: false,
    signupLoading: false,
    profileUpdateLoading: false,
    passwordUpdateLoading: false,
  },
  scroller: {
    showAdd: false,
  },
  dialog: {
    notification: {},
    confirmAction: {},
  },
  entries: {
    createEntryLoading: false,
    getEntriesLoading: false,
    getEntriesError: '',
    entries: JSON.parse(localStorage.getItem('entries')) || [],
    entry: {},
    currentEntry: 0,
  },
};
