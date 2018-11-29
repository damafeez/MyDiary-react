import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import ProtectedRoute from './hoc/ProtectedRoute';
import Authentication from './views/Authentication';
import Home from './views/Home';
import NotificationDialog from './containers/NotificationDialog';
import ConfirmAction from './containers/ConfirmAction';
import './App.scss';

const Profile = () => (<h2>Profile</h2>);

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Authentication} />
          {/* <Route exact path="/signup" component={Authentication} /> */}
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route component={() => (<div>hello world</div>)} />
        </Switch>
        <NotificationDialog />
        <ConfirmAction />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
