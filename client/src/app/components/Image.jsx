import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
    imageClass,
    onError,
    onLoad,
  } = props;

  uSpinnerid += 1;

  const spinnerId = `spin${uSpinnerid}`;
  return (
    <Fragment>
      <img
        className={imageClass}
        src={src}
        alt={alt}
        onLoad={$event => onLoad($event, spinnerId)}
        onError={$event => onError($event, spinnerId)}
      />
      <div id={spinnerId} className="h-100 w-100 d-flex align-items-center justify-content-center">
        <div
          className="spinner-border text-success"
          style={{
            width: '4rem',
            height: '4rem',
            position: 'absolute',
          }}
          role="status"
        />
      </div>
    </Fragment>
  );
};

Image.defaultProps = {
  imageClass: '',
  onLoad: defaultOnLoad,
  onError: defaultOnError,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
};

export default Image;
