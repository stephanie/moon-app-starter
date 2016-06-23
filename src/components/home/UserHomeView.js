import React from 'react';
import checkAuth from '../checkAuth';

const UserHomeView = () => {
  return (
    <div>
      <h1>My Triplists</h1>
    </div>
  );
};

export default checkAuth(UserHomeView);
