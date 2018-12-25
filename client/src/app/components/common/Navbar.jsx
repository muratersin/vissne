import React from 'react';
import { Link } from 'react-router-dom';
import PropTyes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

function toggleMobileMenu() {
  const menu = document.getElementById('navbarSupportedContent');

  if (/show/gi.test(menu.className)) {
    menu.className = menu.className.replace(' show', '');
  } else {
    menu.className += ' show';
  }
}

const Navbar = (props) => {
  const {
    user,
    isLoggedIn,
  } = props;

  const loginButton = isLoggedIn ? (
    <a role="button" className="btn btn-outline-secondary" aria-pressed="true" href="/logout">
      <FontAwesomeIcon icon="user" />
      {user.fullName}
    </a>
  ) : (
    <Link to="/login" className="btn btn-outline-secondary">Login / Register</Link>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <Link className="navbar-brand" to="/">Vissne</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMobileMenu}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Discover</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">In Theaters</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">Coming Soon</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        {loginButton}
      </div>
    </nav>
  );
};

export default Navbar;
