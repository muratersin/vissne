import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { UserShape } from '../../../lib/prop-shapes';
import './Navbar.scss';

const Navbar = (props) => {
  const {
    user,
    isLoggedIn,
  } = props;

  const loginButton = isLoggedIn ? (
    <Fragment>
      <li className="nav-item ">
        <Link className="nav-link" to="/profile" title="Profile">
          <span className="mr-2">{user.fullName}</span>
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
      <a href="/auth" className="nav-link">LOGIN</a>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={`${vissne.cdn}/images/logo.png`} alt="Vissne" height="30" className="mx-auto d-block" />
      </Link>

      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon="filter" />
        </button>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/in-theatre">IN THEATERS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/coming-soon">COMING SOON</Link>
          </li> */}
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
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: UserShape,
};

export default Navbar;
