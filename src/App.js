import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './views/Authentication';
import './App.scss';

const Home = () => <h2>HOme</h2>;
const Profile = () => <h2>Profile</h2>;

const App = () => (
  <Router>
    <div className="body">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Authentication} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;
