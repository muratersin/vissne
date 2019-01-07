import React from 'react';
import { castListPropTypes } from '../../../lib/prop-types';
import Cast from './Cast';

import './CastList.scss';

const CastList = ({ casts }) => {
  const castList = casts.map(c => (
    <Cast
      key={c.id}
      name={c.name}
      profilePath={c.profilePath}
      character={c.character}
    />
  ));

  return (
    <div className="card cast-list">
      <div className="card-body">
        <h5 className="card-title">Cast list</h5>
        {castList}
      </div>
    </div>
  );
};

CastList.propTypes = castListPropTypes

export default CastList;
