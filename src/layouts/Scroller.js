import React from 'react';
import './Scroller.scss';

export default ({ children, ...props }) => {
  return (
    <div className="scroller">{children}</div>
  );
};
