import React from 'react';
import PropTypes, { object } from 'prop-types';
import Company from './Company';

import './CompanyList.scss';

const CompanyList = ({ companies }) => (
  <div className="company-list">
    {companies.map(c => (
      <div className="company">
        <Company logo={c.logo_path} name={c.name} />
      </div>
    ))}
  </div>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(object).isRequired,
};

export default CompanyList;
