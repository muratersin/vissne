import React from 'react';
import PropTypes from 'prop-types';
import { MovieShape } from '../../../lib/prop-shapes';

import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = ({ movies, genres, filter }) => {
  const list = movies.map(movie => (
    <div key={movie.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
    <div className="container-fluid">
      <Filter genres={genres} filter={filter} />
      <div className="row">
        {list}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};

export default MovieList;
