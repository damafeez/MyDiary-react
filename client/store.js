import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ApiClass from './API';
import initialState from './initialState';

const API = new ApiClass(initialState.auth.user.token);
const enhancers = composeWithDevTools({});
const store = createStore(
  reducers,
  initialState,
  enhancers(applyMiddleware(thunk.withExtraArgument(API))),
);

export default store;
