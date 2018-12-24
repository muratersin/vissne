import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = ({ image, title }) => (
  <div className="card">
    <img className="card-img" src={`http://image.tmdb.org/t/p/w342/${image}`} alt={title} />
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MovieCard;
