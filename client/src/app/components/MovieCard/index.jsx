import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '../Image';
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
    <div className="movie-card">
      <Link to={`movie/${slug}/${id}`}>
        <div className="movie-poster">
          <span className="badge badge-dark rating-tag">{rate}</span>
          <Image
            className="card-img-top"
            src={image}
            alt={title}
          />
        </div>
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
