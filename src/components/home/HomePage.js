import React from 'react';
import GuestHomeView from './GuestHomeView'
import UserHomeView from './UserHomeView'

const HomePage = () => {
  return (
    <div className="main-content">
      <GuestHomeView/>
      <UserHomeView/>
    </div>
  );
};

export default HomePage;
