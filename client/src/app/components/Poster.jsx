import React from 'react';
import PropTypes from 'prop-types';

let uIdNumber = 0;

const defaultImage = <img src={`${vissne.cdn}/${vissne.defaultCoverImagePath}`} alt="vissne" />;

function imageOnLoad() {
  const idNumber = this.id.split('-')[1];
  const imgDiv = document.getElementById(`imgdiv${idNumber}`);

  imgDiv.appendChild(this);
  imgDiv.removeChild(imgDiv.firstChild);
}

function imageOnError() {
  this.src = vissne.defaultCoverImagePath;
}

const Poster = ({ src, alt }) => {
  uIdNumber += 1;

  const imageDivId = `imgdiv${uIdNumber}`;

  const img = new Image();
  img.onload = imageOnLoad;
  img.onerror = imageOnError;
  img.src = src;
  img.alt = alt;
  img.id = `tmpimage-${uIdNumber}`;

  return (
    <div
      className="img-fluid h-100 w-100 d-flex align-items-center justify-content-center"
      id={imageDivId}
    >
      {defaultImage}
    </div>
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Poster;
