class CustomAPIError extends Error {
  constructor(message = 'an error occoured', status = 400, ...params) {
    super(message, ...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomAPIError);
    }
    this.response = {
      status,
      data: {
        error: [message],
      },
    };
  }
}
export default {
  UPDATE_TOKEN() {},
  signup(payload) {
    if (payload === 'error') throw new CustomAPIError();
    return { data: { data: { user: 'user' } } };
  },
  login(payload) {
    if (payload === 'error') throw new CustomAPIError();
    return { data: { data: { user: 'user' } } };
  },
  editProfile(payload) {
    if (payload === 'error') throw new CustomAPIError();
    return { data: { data: { user: 'user' } } };
  },
  updatePassword(payload) {
    if (payload === 'error') throw new CustomAPIError();
    return { data: { data: { user: 'user' } } };
  },
};
