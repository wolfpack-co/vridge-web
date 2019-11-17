import React from 'react';
import Community from '../components/Community';
import AuthorizedLayout from './AuthorizedLayout';

const CommunityPage = () => (
  <AuthorizedLayout>
    <Community />
  </AuthorizedLayout>
);

export default CommunityPage;
