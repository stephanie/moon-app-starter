import React from 'react';
import checkAuth from '../checkAuth';

const TripsPage = () => {
  return (
    <div>
      <h1>My Trips</h1>
    </div>
  );
};

export default checkAuth(TripsPage);
