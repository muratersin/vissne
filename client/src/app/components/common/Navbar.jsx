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
      <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <FontAwesomeIcon icon="user" className="mr-2" />
        {user.fullName}
      </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/profile">
          <FontAwesomeIcon icon="user" className="mr-2" />
          Profile
        </Link>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/logout">
          <FontAwesomeIcon icon="sign-out-alt" className="mr-2" />
          Logout
        </a>
      </div>
    </li>
  ) : <Link to="/login" className="nav-link">Login / Register</Link>;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
      <Link className="navbar-brand" to="/">
        <img src="images/logo.png" alt="Vissne" height="30" className="mx-auto d-block" />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon="bars" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">IN THEATERS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">COMING SOON</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {loginButton}
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
