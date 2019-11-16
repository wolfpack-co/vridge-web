import React from 'react';
import Menu from '../components/Menu';

const AuthorizedLayout = ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
);

export default AuthorizedLayout;
