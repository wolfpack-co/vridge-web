import React from 'react';
import Fridge from '../components/Fridge';
import Menu from '../components/Menu';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => (
  <AuthorizedLayout tabs={<Menu />}>
    <Fridge />
  </AuthorizedLayout>
);

export default FridgePage;
