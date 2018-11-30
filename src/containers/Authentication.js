import React from 'react';
import AuthCard from '../components/auth/AuthCard';
import './Authentication.scss';

export default (props) => (
  <div className="auth">
    <AuthCard {...props} />
  </div>
);
