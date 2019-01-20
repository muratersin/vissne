import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faUnlock,
  faKey,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import Auth from './Auth';
import '../../scripts';
import '../../../assets/scss/main.scss';

library.add(
  faEnvelope,
  faUnlock,
  faKey,
  faSignature,
  faFacebook,
  faGoogle,
);

render(<Auth />, document.getElementById('root'));
