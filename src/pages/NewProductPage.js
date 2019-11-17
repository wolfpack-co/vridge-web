import React from 'react';
import AuthorizedLayout from './AuthorizedLayout';
import AddToFridngeForm from '../components/AddToFridgeForm';

const NewProductPage = () => {
  return (
    <AuthorizedLayout>
      <AddToFridngeForm />
    </AuthorizedLayout>
  );
};

export default NewProductPage;
