import React from 'react';
import PropTypes from 'prop-types';

import { ALERT_TYPES } from '../../../lib/constants';

const Alert = (props) => {
  const {
    kind,
    show,
    message,
    toggleAlertDialog,
  } = props;

  if (!show) return null;

  return (
    <div className={`alert alert-${kind} site-alert alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={toggleAlertDialog}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Alert.defaultProps = {
  show: false,
  kind: 'info',
  message: null,
};

Alert.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  toggleAlertDialog: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(ALERT_TYPES),
};

export default Alert;
