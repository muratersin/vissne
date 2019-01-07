import React from 'react';
import { alertPropTypes, alertDefaultProps } from '../../../lib/prop-types';

import './Alert.scss';

const Alert = (props) => {
  const {
    kind,
    show,
    message,
    toggleAlert,
  } = props;

  if (!show) return null;

  return (
    <div className={`alert alert-${kind} site-alert alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={toggleAlert}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Alert.defaultProps = alertDefaultProps;

Alert.propTypes = alertPropTypes;

export default Alert;
