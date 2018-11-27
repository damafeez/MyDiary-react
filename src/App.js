import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './views/Authentication';
import Home from './views/Home';
import './App.scss';

const Profile = () => <h2>Profile</h2>;

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Authentication} />
      <Route exact path="/signup" component={Authentication} />
      <Route exact path="/profile" component={Profile} />
    </Fragment>
  </Router>
);

export default App;
