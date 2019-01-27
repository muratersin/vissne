import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { show, height } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="progress" style={{ height: `${height}px` }}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: '100%' }}
      />
    </div>
  );
};

ProgressBar.defaultProps = {
  show: false,
  height: 2,
};

ProgressBar.propTypes = {
  show: PropTypes.bool,
  height: PropTypes.number,
};

export default ProgressBar;
