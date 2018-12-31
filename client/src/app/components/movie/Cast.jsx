import React from 'react';
import PropTypes from 'prop-types';

const Cast = ({
  id,
  name,
  character,
  profilePath,
}) => (
  <article className="level">
    <div className="level-left">
      <div className="level-item">
        <figure className="image-left">
          <p className="image is-64x64">
            <img src={`${vissne.imagesSecureBaseUrl}/w45/${profilePath}`} alt={name} />
          </p>
        </figure>
      </div>
      <div className="level-item">
        <h5>{name}</h5>
        <span>{character}</span>
      </div>
    </div>
  </article>
);

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
  character: PropTypes.number.isRequired,
  profilePath: PropTypes.number.isRequired,
};

export default Cast;
