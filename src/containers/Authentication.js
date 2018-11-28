import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import './Authentication.scss';
import { signup as signupAction, login as loginAction } from '../actions/auth';
import set from '../actions/notification';

export class Authentication extends Component {
  loginHandler = async (event) => {
    event.preventDefault();
    const { setNotification, login } = this.props;
    const response = await login({
      username: event.target.loginUsername.value,
      password: event.target.loginPassword.value,
    });
    if (response.success) {
      setNotification({
        message: response.success,
      });
    }
    if (response.error) {
      setNotification({
        message: response.error,
        status: 'error',
      });
    }
  }

  signupHandler = async (event, callback) => {
    event.preventDefault();
    const { setNotification, signup } = this.props;
    const response = await signup({
      fullName: event.target.signupFullName.value,
      username: event.target.signupUsername.value,
      password: event.target.signupPassword.value,
      email: event.target.signupEmail.value,
    });
    if (response.success) {
      setNotification({
        message: response.success,
      });
      callback();
    }
    if (response.error) setNotification({ message: response.error, status: 'error' });
  }

  render() {
    const { signupLoading, loginLoading, token } = this.props;
    if (token) return (<Redirect to="/" />);
    return (
      <div className="auth">
        <AuthCard
          signupLoading={signupLoading}
          loginLoading={loginLoading}
          login={this.loginHandler}
          signup={this.signupHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loginLoading: state.auth.loginLoading,
  signupLoading: state.auth.signupLoading,
  token: state.auth.user.token,
});

export default connect(
  mapStateToProps,
  { setNotification: set, signup: signupAction, login: loginAction },
)(Authentication);
