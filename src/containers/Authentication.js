import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthCard from '../components/auth/AuthCard';
import './Authentication.scss';
import set from '../actions/notification';

// eslint-disable-next-line react/prefer-stateless-function
export class Authentication extends Component {
  render() {
    const { setNotification } = this.props;
    return (
      <div className="auth">
        <AuthCard {...this.props} setNotification={setNotification} />
      </div>
    );
  }
}

export default connect(null, { setNotification: set })(Authentication);
