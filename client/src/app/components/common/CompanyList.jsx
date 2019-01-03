import React from 'react';
import PropTypes, { object } from 'prop-types';
import Company from './Company';

import './CompanyList.scss';

const CompanyList = ({ companies }) => (
  <div className="card company-list-card">
    <div className="card-body">
      <h5 className="card-title">Companies</h5>
      <div className="company-list">
        {companies.map(c => (
          <div className="company">
            <Company key={c.id} logo={c.logo_path} name={c.name} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(object).isRequired,
};

export default CompanyList;
