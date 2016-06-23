import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import RegisterLink from './RegisterLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';

const Header = ({loading, signOut, auth, user}) => {

  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <RegisterLink />;
  let adminLink = user.isAdmin ? <AdminLink /> : null;

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      {loginLogoutLink}
    </nav>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
