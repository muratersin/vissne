import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

import './MovieList.scss';

const MovieList = ({ movies }) => {
  const list = movies.map(movie => (
    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
      <MovieCard movie={movie} />
    </div>
  ));

  return (
    <div className="row">
      {list}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
