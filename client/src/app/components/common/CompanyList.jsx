import React from 'react';
import { companyListPropTypes } from '../../../lib/prop-types';
import Company from './Company';

import './CompanyList.scss';

const CompanyList = ({ companies }) => (
  <div className="card mb-2">
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

CompanyList.propTypes = companyListPropTypes;

export default CompanyList;
