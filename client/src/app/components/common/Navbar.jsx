import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  const {
    user,
    isLoggedIn,
  } = props;

  const loginButton = isLoggedIn ? (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" href="#/profile)">
        <FontAwesomeIcon icon="user" />
        {user.fullName}
      </a>
      <div className="navbar-dropdown">
        <Link className="navbar-item" to="/profile">
          <FontAwesomeIcon icon="user" />
          Profile
        </Link>
        <div className="dropdown-divider" />
        <a className="navbar-item" href="/logout">
          <FontAwesomeIcon icon="sign-out-alt" />
          Logout
        </a>
      </div>
    </div>
  ) : <Link to="/login" className="navbar-item">Login / Register</Link>;

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={`${vissne.cdn}/images/logo.png`} alt="Vissne" height="30" className="mx-auto d-block" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="siteNavbar">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu" id="siteNavbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">IN THEATERS</Link>
          <Link className="navbar-item" to="/">COMING SOON</Link>
        </div>
        <div className="navbar-end">
          {loginButton}
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  isLoggedIn: false,
  user: {},
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Navbar;
