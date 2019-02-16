import React from 'react';
import PropTypes from 'prop-types';

import { ALERT_TYPES } from '../../lib/constants';

const Alert = (props) => {
  const {
    kind,
    message,
    show,
  } = props;

  if (!show) return null;

  return (
    <div className={`alert alert-${kind} w-100 text-center`} role="alert">
      {message}
    </div>
  );
};

Alert.defaultProps = {
  show: true,
  kind: 'info',
};

Alert.propTypes = {
  kind: PropTypes.oneOf(ALERT_TYPES),
  show: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default Alert;
