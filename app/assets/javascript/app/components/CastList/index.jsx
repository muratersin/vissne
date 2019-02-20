import React from 'react';
import PropTypes from 'prop-types';

import { CastShape } from '../../constants/prop-shapes';
import Cast from '../Cast';
import './CastList.scss';

const CastList = ({ casts }) => {
  const castList = casts.map(c => (
    <Cast cast={c} key={c.id} />
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

CastList.defaultProps = {
  casts: [],
};

CastList.propTypes = {
  casts: PropTypes.arrayOf(CastShape),
};

export default CastList;
