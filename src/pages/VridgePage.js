import React from 'react';
import Fridge from '../components/Fridge';
import Tabs from '../components/Tabs';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => (
  <AuthorizedLayout tabs={<Tabs />}>
    <Fridge />
  </AuthorizedLayout>
);

export default FridgePage;
