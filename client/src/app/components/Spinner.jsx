import React from 'react';
import PropTypes from 'prop-types';

export default function Spinner(props) {
  const {
    show,
    size,
    kind,
    color,
  } = props;

  if (!show) {
    return null;
  }

  return (
    <div className={`spinner-${kind} spinner-${kind}-${size} text-${color}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

Spinner.defaultProps = {
  show: false,
  size: 'sm',
  kind: 'grow',
  color: 'primary',
};

Spinner.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  kind: PropTypes.oneOf([
    'border',
    'grow',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};
