import React from 'react';
import AuthorizedLayout from './AuthorizedLayout';
import Fridge from '../components/Fridge/Fridge';

const FridgePage = () => 
<AuthorizedLayout>
    <Fridge />
</AuthorizedLayout>;

export default FridgePage;
