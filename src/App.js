import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const Home = () => <h2>HOme</h2>;
const Login = () => <h2>Login</h2>;
const Profile = () => <h2>Profile</h2>;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;
