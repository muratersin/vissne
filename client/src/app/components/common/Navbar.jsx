import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.scss';

const Navbar = (props) => {
  const {
    user,
    isLoggedIn,
  } = props;

  const loginButton = isLoggedIn ? (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <FontAwesomeIcon icon="user" />
        {user.fullName}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/profile">
          <FontAwesomeIcon icon="user" />
          Profile
        </Link>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/logout">
          <FontAwesomeIcon icon="sign-out-alt" />
          Logout
        </a>
      </div>
    </li>
  ) : (
    <li className="nav-item">
      <Link to="/auth" className="nav-link">LOGIN</Link>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={`${vissne.cdn}/images/logo.png`} alt="Vissne" height="30" className="mx-auto d-block" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/in-theatre">IN THEATERS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/coming-soon">COMING SOON</Link>
          </li>
        </ul>
        <ul className="navbar-nav my-auto">
          <li className="nav-item">
            {loginButton}
          </li>
        </ul>
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
