import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { UserShape } from '../../constants/prop-shapes';
import './Navbar.scss';

const Navbar = (props) => {
  const {
    user,
    isLoggedIn,
    pathName,
  } = props;

  const loginButton = isLoggedIn ? (
    <Fragment>
      <li className="nav-item ">
        <Link className="nav-link" to="/profile/account" title="Profile">
          <span className="mr-2">{user.userName}</span>
          <FontAwesomeIcon icon="user" />
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/logout" title="Logout">
          <FontAwesomeIcon icon="sign-out-alt" />
        </a>
      </li>
    </Fragment>
  ) : (
    <li className="nav-item">
      <Link to="/auth" className="nav-link">login</Link>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          src={`${vissne.cdn}/images/logo.png`}
          alt="Vissne"
          height="30"
          className="mx-auto d-block"
        />
      </Link>

      <div>
        <button
          className="navbar-toggler"
          type="button"
          id="filterButton"
        >
          <FontAwesomeIcon icon="filter" />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${pathName === '/in-theaters' ? 'active' : ''}`}
              to="/in-theaters"
            >
              in theaters
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${pathName === '/coming-soon' ? 'active' : ''}`}
              to="/coming-soon"
            >
              coming soong
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav my-auto">
          {loginButton}
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  isLoggedIn: false,
  user: {},
  pathName: '/',
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: UserShape,
  pathName: PropTypes.string,
};

export default Navbar;
