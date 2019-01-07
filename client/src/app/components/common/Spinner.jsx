import React from 'react';
import { spinnerPropTypes, spinnerDefaultProps } from '../../../lib/prop-types';

const Spinner = (props) => {
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
};

Spinner.defaultProps = spinnerDefaultProps;

Spinner.propTypes = spinnerPropTypes;

export default Spinner;
