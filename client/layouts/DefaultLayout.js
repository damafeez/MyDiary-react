import React from 'react';
import Header from '../containers/Header';
import './DefaultLayout.scss';

export default ({ children, ...props }) => (
  <div className="body default-layout" {...props}>
    <Header />
    {children}
  </div>
);
