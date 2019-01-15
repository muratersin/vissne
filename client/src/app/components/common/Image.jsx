import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

let uSpinnerid = 0;

const defaultOnLoad = ($event, spinnerId) => {
  const el = document.getElementById(spinnerId);
  el.className = 'd-none';
};

const defaultOnError = ($event, spinnerId) => {
  defaultOnLoad($event, spinnerId);
  const image = $event.currentTarget;
  image.src = vissne.defaultCoverImagePath;
};

const Image = (props) => {
  const {
    src,
    alt,
    className,
    onError,
    onLoad,
  } = props;

  uSpinnerid += 1;

  const spinnerId = `spin${uSpinnerid}`;
  return (
    <div className="image-container d-flex align-items-center justify-content-center">
      <img
        className={className}
        src={src}
        alt={alt}
        onLoad={$event => onLoad($event, spinnerId)}
        onError={$event => onError($event, spinnerId)}
      />
      <div
        className="spinner-border text-success"
        id={spinnerId}
        style={{
          width: '4rem',
          height: '4rem',
          position: 'absolute',
        }}
        role="status"
      />
    </div>
  );
};

Image.defaultProps = {
  className: '',
  onLoad: defaultOnLoad,
  onError: defaultOnError,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
};

export default Image;
