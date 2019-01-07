import React from 'react';
import { movieListPropTypes } from '../../../lib/prop-types';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
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
      <div className="row">
        {list}
      </div>
    </div>
  );
};

MovieList.propTypes = movieListPropTypes;

export default MovieList;
