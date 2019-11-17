import React from 'react';
import Community from '../components/Community';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => (
  <AuthorizedLayout>
    <Community />
  </AuthorizedLayout>
);

export default FridgePage;
