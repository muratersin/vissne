import React from 'react';

import { CastShape } from '../../constants/prop-shapes';
import './Cast.scss';

const Cast = ({ cast }) => (
  <div className="cast">
    <img className="image" src={cast.profilePath} alt={cast.name} />
    <div className="cast-info">
      <span className="has-text-weight-bold">{cast.name}</span>
      <span className="has-text-weight-light">{cast.character}</span>
    </div>
  </div>
);

Cast.defaultProps = {
  cast: {},
};

Cast.propTypes = {
  cast: CastShape,
};

export default Cast;
