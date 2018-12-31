import React from 'react';
import PropTypes from 'prop-types';

import './Cast.scss';

const Cast = ({
  id,
  name,
  character,
  profilePath,
}) => (
  <div className="cast">
    <img className="image" src={profilePath} alt={name} />
    <div className="cast-info">
      <span className="has-text-weight-bold">{name}</span>
      <span className="has-text-weight-light">{character}</span>
    </div>
  </div>
);

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
};

export default Cast;
