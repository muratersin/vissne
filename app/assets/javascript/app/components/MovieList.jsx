import React from 'react';
import PropTypes from 'prop-types';

import { MovieShape } from '../constants/prop-shapes';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const list = movies.map(movie => (
    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 d-flex justify-content-center">
      <MovieCard
        id={movie.id}
        image={movie.poster}
        title={movie.title}
        rate={movie.voteAverage}
        slug={movie.slug}
      />
    </div>
  ));

  return (
    <div className="row">
      {list}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};

export default MovieList;
