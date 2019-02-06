import React from 'react';

import { CompanyShape } from '../constants/prop-shapes';

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

Company.propTypes = CompanyShape;

export default Company;
