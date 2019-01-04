import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ logo, name }) => {
  const logoPath = logo
    ? `${vissne.imagesSecureBaseUrl}/w92/${logo}`
    : `${vissne.cdn}/images/placeholder.png`;

  return (
    <div className="media mb-2">
      <img className="mr-3 company-logo" src={logoPath} alt={name} />
      <div className="media-body">
        <h6 className="mt-0">{name}</h6>
      </div>
    </div>
  );
};

Company.defaultProps = {
  logo: '',
  name: 'Company',
};

Company.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

export default Company;
