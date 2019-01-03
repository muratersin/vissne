import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ logo, name }) => {
  const company = logo
    ? <img className="img-thumbnail company-logo" src={`${vissne.imagesSecureBaseUrl}/w92/${logo}`} alt={name} />
    : <span>{name}</span>;

  return (
    <div className="media mb-2">
      <img className="mr-3 company-logo" src={`${vissne.imagesSecureBaseUrl}/w92/${logo}`} alt={name} />
      <div className="media-body">
        <h5 className="mt-0">{name}</h5>
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
