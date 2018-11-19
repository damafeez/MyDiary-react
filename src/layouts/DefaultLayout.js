import React from 'react';

export default ({ children, ...props }) => (
  <div className="body" {...props}>{children}</div>
);
