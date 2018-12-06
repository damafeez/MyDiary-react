import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import './Authentication.scss';
import { signup as signupAction, login as loginAction } from '../actions/auth';

export class Authentication extends Component {
  loginHandler = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login({
      username: event.target.loginUsername.value,
      password: event.target.loginPassword.value,
    });
  }

  signupHandler = (event) => {
    event.preventDefault();
    const { signup } = this.props;
    signup({
      fullName: event.target.signupFullName.value,
      username: event.target.signupUsername.value,
      password: event.target.signupPassword.value,
      email: event.target.signupEmail.value,
    });
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
  { signup: signupAction, login: loginAction },
)(Authentication);
