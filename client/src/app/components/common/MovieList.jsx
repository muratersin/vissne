import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import './MovieList.scss';

const MovieList = ({ movies }) => {
  const list = movies.map(movie => (
    <div key={movie.id} className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-one-fifth-full-hd">
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
    <div className="container is-fluid movie-list">
      <div className="columns is-multiline is-mobile is-tablet is-desktop is-widescreen is-full-hd">
        {list}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
