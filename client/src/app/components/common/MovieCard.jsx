import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = ({ image, title, rate }) => (
  <div className="card">
    <div className="card-image movie-poster">
      <span className="tag is-black rating-tag">{rate}</span>
      <img className="card-img" src={`http://image.tmdb.org/t/p/w342/${image}`} alt={title} />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-6">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default MovieCard;
