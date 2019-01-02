import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ logo, name }) => (
  <div className="company-logo">
    <img src={`${vissne.imagesSecureBaseUrl}/w92/${logo}`} alt={name} />
  </div>
);

Company.defaultProps = {
  logo: '',
  name: 'Company',
};

Company.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

export default Company;
