import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = (props) => {
  const {
    size,
    show,
    color,
    value,
  } = props;

  if (!show) {
    return null;
  }

  return (
    <progress className={`progress is-${size} is-${color}`} max="100" />
  );
};

ProgressBar.defaultProps = {
  size: 'small',
  show: false,
  value: 0,
  color: 'primary',
};

ProgressBar.propTypes = {
  size: PropTypes.string,
  show: PropTypes.bool,
  value: PropTypes.number,
  color: PropTypes.string,
};

export default ProgressBar;
