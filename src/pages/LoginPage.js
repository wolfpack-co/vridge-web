import React from 'react';

import UnauthorizedLayout from './UnauthorizedLayout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
  <UnauthorizedLayout>
    <LoginForm />
  </UnauthorizedLayout>
);

export default LoginPage;
