import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    <div className="card">
      <Link to={`movie/${slug}/${id}`}>
        <div className="card-image movie-poster">
          <figure className="image">
            <span className="tag is-black rating-tag">{rate}</span>
            <img className="card-img" src={image} alt={title} />
          </figure>
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
  slug: PropTypes.number.isRequired,
};

export default MovieCard;
