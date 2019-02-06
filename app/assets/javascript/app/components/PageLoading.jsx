import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

const PageLoading = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="position-fixed top-0 left-0 bottom-0 bg-light d-flex justify-content-center align-items-center w-100 h-100">
      <Spinner show size="lg" addionalClass="mr-2" />
      Loading...
    </div>
  );
};

PageLoading.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default PageLoading;
