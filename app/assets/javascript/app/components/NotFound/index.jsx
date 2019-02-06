import React from 'react';

import './NotFound.scss';

const NotFound = () => (
  <div className="page-not-found">
    <img src={`${vissne.cdn}/images/ong.png`} alt="404" />
    <h4>404</h4>
    <h5>Page not found</h5>
    <p>
      We are sorry. The page you are looking for was moved, removed, renamed or might never existed.
    </p>
    <a href="/" className="button is-primary">GO TO HOME</a>
  </div>
);

export default NotFound;
