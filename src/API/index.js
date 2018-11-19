import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/v1`;
export default class API {
  constructor(token) {
    this.updateToken(token);
    this.unauthorized = axios.create({
      baseURL,
    });
  }

  updateToken(token) {
    this.api = axios.create({
      baseURL,
      headers: { Authorization: token },
    });
  }

  signup(payload) {
    return this.unauthorized.post('/auth/signup', payload);
  }

  login(payload) {
    return this.unauthorized.post('/auth/login', payload);
  }
}