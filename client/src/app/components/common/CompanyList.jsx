import React from 'react';
import PropTypes, { object } from 'prop-types';
import Company from './Company';

import './CompanyList.scss';

const CompanyList = ({ companies }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Companies</h5>
      <div className="col-12">
        {companies.map(c => (
          <Company key={c.id} logo={c.logo_path} name={c.name} />
        ))}
      </div>
    </div>
  </div>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(object).isRequired,
};

export default CompanyList;
