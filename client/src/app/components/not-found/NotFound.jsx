import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <img src="images/ong.png" alt="404" />
      <h4>404</h4>
      <h5>Page not found</h5>
      <p>We are sorry. The page you are looking for was moved, removed, renamed or might never existed.</p>
      <Link to="/" className="button is-primary">GO TO HOME</Link>
    </div>
  );
};

module.exports = NotFound;
