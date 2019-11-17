import React from 'react';
import { useParams } from 'react-router-dom';

import MyVridge from '../components/Fridge/MyVridge';
import OthersVridge from '../components/Fridge/OthersVridge';

import Tabs from '../components/Tabs';
import AuthorizedLayout from './AuthorizedLayout';

const FridgePage = () => {
  const { category } = useParams();
  return (
    <AuthorizedLayout tabs={<Tabs />}>
      {category === 'yours' ? <MyVridge /> : <OthersVridge />}
    </AuthorizedLayout>
  );
};

export default FridgePage;
