import React from 'react';
import PropTypes from 'prop-types';
import './Video.scss';

const Video = ({ videoKey }) => (
  <div className="video mb-2">
    <iframe
      title="Video"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoKey}?autoplay=0&origin=${vissne.domain}`}
      frameBorder="0"
    />
  </div>
);

Video.propTypes = {
  videoKey: PropTypes.string.isRequired,
};

export default Video;
