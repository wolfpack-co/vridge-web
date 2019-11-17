import React from 'react';
import Account from '../components/Account';
import AuthorizedLayout from './AuthorizedLayout';

const AccountPage = () => (
  <AuthorizedLayout>
    <Account />
  </AuthorizedLayout>
);

export default AccountPage;
