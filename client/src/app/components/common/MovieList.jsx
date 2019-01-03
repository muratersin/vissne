import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import './MovieList.scss';

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

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
