import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Poster from '../Poster';
import './MovieCard.scss';

const MovieCard = (props) => {
  const {
    id,
    title,
    image,
    rate,
    slug,
  } = props;

  return (
    <div className="movie-card h-100 w-100 rounded-0 d-flex align-items-center justify-content-center img-thumbnail">
      <Link to={`movie/${slug}/${id}`} className="w-100">
        <span className="badge rating-tag shadow-sm d-flex flex-column">
          {rate}
        </span>
        <Poster src={image} alt={title} />
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieCard;
