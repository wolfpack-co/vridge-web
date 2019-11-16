import React from 'react';
import Fridge from '../components/Fridge';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => (
  <AuthorizedLayout>
    <Fridge />
  </AuthorizedLayout>
);

export default FridgePage;
