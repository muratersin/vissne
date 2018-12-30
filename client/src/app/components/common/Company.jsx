import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ logo, name }) => (
  <figure className="image is-64x64">
    <img src={`${vissne.imagesSecureBaseUrl}/w92/${logo}`} alt={name} />
  </figure>
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
