import React from 'react';

import { CompanyShape } from '../constants/prop-shapes';

const Company = ({ company }) => {
  const logoPath = company.logo
    ? `${vissne.imagesSecureBaseUrl}/w92/${company.logo}`
    : `${vissne.cdn}/images/placeholder.png`;

  return (
    <div className="media mb-2">
      <img className="mr-3 company-logo" src={logoPath} alt={company.name} />
      <div className="media-body">
        <h6 className="mt-0">{company.name}</h6>
      </div>
    </div>
  );
};

Company.propTypes = {
  company: CompanyShape.isRequired,
};

export default Company;
