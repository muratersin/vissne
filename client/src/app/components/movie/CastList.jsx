import React from 'react';
import PropTypes from 'prop-types';
import Cast from './Cast';

const CastList = ({ casts }) => {
  const castList = casts.map(c => <Cast key={c.id} cast={c} />);

  return (
    <div>
      {castList}
    </div>
  );
};

CastList.propTypes = {
  casts: PropTypes.arrayOf(Object).isRequired,
};
