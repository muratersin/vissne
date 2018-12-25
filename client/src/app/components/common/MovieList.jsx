import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

import './MovieList.scss';

const MovieList = ({ movies }) => {
  const list = movies.map(movie => (
    <div key={movie.id} className="col-6 col-sm-6 col-md-3 col-lg-2">
      <MovieCard image={movie.poster_path} title={movie.title} />
    </div>
  ));

  return (
    <div className="container-fluid" id="movieListContainer">
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
