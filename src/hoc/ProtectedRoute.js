import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)
    }
  />
);

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.user.token });

export default connect(mapStateToProps)(ProtectedRoute);
