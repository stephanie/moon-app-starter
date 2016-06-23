import React from 'react';
import checkAuth from '../checkAuth';
import LoginPage from '../login/LoginPage';

const GuestHomeView = () => {
  return (
    <div>
      <LoginPage/>
    </div>
  );
};

export default checkAuth(GuestHomeView, false);
