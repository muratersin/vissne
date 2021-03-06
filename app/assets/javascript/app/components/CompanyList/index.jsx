import React from 'react';
import PropTypes from 'prop-types';

import { CompanyShape } from '../../constants/prop-shapes';
import Company from '../Company';
import './CompanyList.scss';

const CompanyList = ({ companies }) => (
  <div className="card mb-2">
    <div className="card-body">
      <h5 className="card-title">Companies</h5>
      <div className="col-12">
        {companies.map(c => (
          <Company key={c.id} company={c} />
        ))}
      </div>
    </div>
  </div>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(CompanyShape).isRequired,
};

export default CompanyList;
