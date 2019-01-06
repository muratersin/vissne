import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = (props) => {
  const {
    genres,
    filter,
  } = props;

  return (
    <div className="row">
      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <select name="genre" className="form-control filter-input rounded-0">
          <option value="">Genres</option>
          {genres.map(g => <option key={g.id} value={g.id} className={filter.genres.indexOf(g.id) === -1 ? '' : 'selected'}>{g.name}</option>)}
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(Object).isRequired,
  filter: PropTypes.instanceOf(Object).isRequired,
};

export default Filter;
