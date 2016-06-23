import React from 'react';
import {Link} from 'react-router';

const RegisterLink = () => {
  return (
    <span>
      <Link to="/register" activeClassName="active">Sign Up</Link>
    </span>
  );
};

export default RegisterLink;
