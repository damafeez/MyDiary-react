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
  },
};
