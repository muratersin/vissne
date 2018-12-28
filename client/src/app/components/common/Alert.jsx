import React from 'react';
import PropTypes from 'prop-types';

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
    <div className={`notification is-${kind} site-alert`}>
      {message}
      <button type="button" className="delete" onClick={toggleAlert} />
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
  toggleAlert: PropTypes.func.isRequired,
  kind: PropTypes.oneOf([
    'danger',
    'warning',
    'success',
    'info',
    'link',
    'primary',
  ]),
};

export default Alert;
