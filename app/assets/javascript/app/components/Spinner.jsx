import React from 'react';
import PropTypes from 'prop-types';

export default function Spinner(props) {
  const {
    show,
    size,
    kind,
    color,
    addionalClass,
  } = props;

  if (!show) {
    return null;
  }

  return (
    <div className={`spinner-${kind} spinner-${kind}-${size} text-${color} ${addionalClass}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

Spinner.defaultProps = {
  show: false,
  size: 'sm',
  kind: 'grow',
  color: 'primary',
  addionalClass: '',
};

Spinner.propTypes = {
  show: PropTypes.bool,
  addionalClass: PropTypes.string,
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
