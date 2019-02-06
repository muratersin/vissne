import React from 'react';
import PropTypes from 'prop-types';

function imageOnLoad() {

}

function imageOnError() {
  this.src = vissne.defaultCoverImagePath;
}

const Poster = ({ src, alt }) => (
  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
    <img
      className="img-fluid"
      src={`${src}`}
      onLoad={imageOnLoad}
      onError={imageOnError}
      alt={alt}
    />
  </div>
);

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Poster;
