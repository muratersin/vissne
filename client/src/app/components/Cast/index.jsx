import React from 'react';

import { CastShape } from '../../../lib/prop-shapes';
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

Cast.propTypes = CastShape;

export default Cast;
