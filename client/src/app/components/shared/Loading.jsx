import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Loading.scss';

const Loading = ({ show }) => (
  <div className="page-loading">
    <span>
      <FontAwesomeIcon icon="compact-disc" />
    </span>
  </div>
);

export default Loading;
