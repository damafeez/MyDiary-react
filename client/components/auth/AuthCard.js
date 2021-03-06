import React, { Component } from 'react';
import './AuthCard.scss';
import InputBox from '../shared/inputBox';

export default class AuthCard extends Component {
  state = {
    activeView: 'login',
    loginUsername: '',
    loginPassword: '',
    signupUsername: '',
    signupEmail: '',
    signupPassword: '',
    signupFullName: '',
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  toggleView = (view) => this.setState({ activeView: view });

  signupReset = () => this.setState({
    signupUsername: '',
    signupEmail: '',
    signupPassword: '',
    signupFullName: '',
  });

  render() {
    const {
      activeView,
      loginUsername,
      loginPassword,
      signupUsername,
      signupEmail,
      signupPassword,
      signupFullName,
    } = this.state;
    const {
      signupLoading,
      loginLoading,
      signup,
      login,
    } = this.props;
    return (
      <div className="auth-card">
        <section className="login-signup">
          <div className={`login-signup_login ${activeView === 'login' ? 'active' : ''}`}>
            <h2>LOGIN</h2>
            <form name="loginForm" onSubmit={login}>
              <InputBox handleChange={this.handleChange} value={loginUsername} label="Username" icon="icon-user-check" name="loginUsername" required />
              <InputBox type="password" handleChange={this.handleChange} value={loginPassword} label="Password" icon="icon-unlock" name="loginPassword" required />
              <button disabled={loginLoading} type="submit" name="submit" className="round btn">Login</button>
            </form>
            <p>New user? <span className="link" onClick={() => this.toggleView('signup')}>Sign up here</span></p>
          </div>
          <div className={`login-signup_signup ${activeView === 'signup' ? 'active' : ''}`}>
            <h2>SIGN UP</h2>
            <form onSubmit={signup} name="signupForm">
              <InputBox handleChange={this.handleChange} value={signupFullName} label="Full Name" icon="icon-user" name="signupFullName" required />
              <InputBox handleChange={this.handleChange} value={signupUsername} label="Username" icon="icon-user-check" name="signupUsername" required />
              <InputBox type="email" handleChange={this.handleChange} value={signupEmail} label="Email" icon="icon-at-sign" name="signupEmail" required />
              <InputBox type="password" handleChange={this.handleChange} value={signupPassword} label="Password" icon="icon-unlock" name="signupPassword" required />
              <button type="submit" disabled={signupLoading} name="submit" className="round btn">Sign up</button>
            </form>
            <p>Existing user? <span className="link" onClick={() => this.toggleView('login')}>Login here</span></p>
          </div>
        </section>
        <section className="intro">
          <h1>DAILY AWESOMNESS ON THE GO.<br /> SIMPLE &amp; FAST</h1>
          <p>What stunning event<br />would you add today?</p>
        </section>
      </div>
    );
  }
}
