import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/v1`;
export default class API {
  constructor(token) {
    this.UPDATE_TOKEN(token);
    this.unauthorized = axios.create({
      baseURL,
    });
  }

  UPDATE_TOKEN(token) {
    this.api = axios.create({
      baseURL,
      headers: { 'x-auth-token': token },
    });
  }

  signup(payload) {
    return this.unauthorized.post('/auth/signup', payload);
  }

  login(payload) {
    return this.unauthorized.post('/auth/login', payload);
  }

  editProfile(payload) {
    return this.api.put('/auth/edit', payload);
  }

  updatePassword(payload) {
    return this.api.put('/auth/password', payload);
  }

  createEntry(payload) {
    return this.api.post('/entries', payload);
  }

  getEntries() {
    return this.api.get('/entries');
  }

  updateEntry(id, payload) {
    return this.api.put(`/entries/${id}`, payload);
  }

  deleteEntry(id) {
    return this.api.delete(`/entries/${id}`);
  }
}
