import React from 'react';
import PropTypes from 'prop-types';


const Poster = ({ src, alt }) => (
  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
    <img
      className="img-fluid lazy"
      src={`${vissne.cdn}/${vissne.defaultCoverImagePath}`}
      data-src={src}
      alt={alt}
    />
  </div>
);

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Poster;
