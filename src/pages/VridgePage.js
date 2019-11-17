import React from 'react';

import Vridge from '../components/Fridge/Vridge';
import Tabs from '../components/Tabs';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => (
  <AuthorizedLayout tabs={<Tabs />}>
    <Vridge />
  </AuthorizedLayout>
);

export default FridgePage;
