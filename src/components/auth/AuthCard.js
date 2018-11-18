import React, { Component } from 'react';
import './AuthCard.scss';
import InputBox from '../shared/inputBox';

export default class AuthCard extends Component {
  state = {
    activeView: 'login',
    'login-username': '',
    'login-password': '',
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  toggleView = (view) => this.setState({ activeView: view });

  render() {
    const { 'login-username': loginUsername, 'login-password': loginPassword } = this.state;
    return (
      <div className="auth-card">
        <section className="login-signup">
          <div className="login-signup_login">
            <h2>LOGIN</h2>
            <form name="login-signup_login_form" onSubmit="login(event)">
              <InputBox handleChange={this.handleChange} value={loginUsername} label="Username" icon="icon-user-check" name="login-username" required />
              <InputBox handleChange={this.handleChange} value={loginPassword} label="Password" icon="icon-unlock" name="login-password" required />
              <button type="button" name="submit" className="round btn">Login</button>
            </form>
            <p>New user? <span className="link" onClick={() => this.toggleView('signup')}>Sign up here</span></p>
          </div>
          {/* <div className="signup">
            <h2>SIGN UP</h2>
            <form onSubmit="signup(event)" name="signupForm">
              <div className="input">
                <svg className="icon">
                  <use xlinkHref="svg/icons.svg#icon-user" />
                </svg>
                <input required name="fullName" id="signUp-fullName" type="text" />
                <label htmlFor="signUp-fullName">Full Name</label>
              </div>
              <div className="input">
                <svg className="icon">
                  <use xlinkHref="svg/icons.svg#icon-user-check" />
                </svg>
                <input required name="username" id="signUp-username" type="text" />
                <label htmlFor="signUp-username">Username</label>
              </div>
              <div className="input">
                <svg className="icon">
                  <use xlinkHref="svg/icons.svg#icon-at-sign" />
                </svg>
                <input required name="email" id="signUp-email" type="email" />
                <label htmlFor="signUp-email">Email</label>
              </div>
              <div className="input">
                <svg className="icon">
                  <use xlinkHref="svg/icons.svg#icon-unlock" />
                </svg>
                <input required name="password" id="signUp-password" type="password" />
                <label htmlFor="signUp-password">Password</label>
              </div>
              <button name="submit" className="round btn">Sign up</button>
            </form>
            <p>Existing user? <span className="link" onClick="toggleView('login')">Login here</span></p>
          </div> */}
        </section>
        <section className="intro">
          <h1>DAILY AWESOMNESS ON THE GO.<br /> SIMPLE &amp; FAST</h1>
          <p>What stunning event<br />would you add today?</p>
        </section>
      </div>
    );
  }
}
