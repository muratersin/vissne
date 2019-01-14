import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faSignOutAlt,
  faEnvelope,
  faUnlock,
  faAlignLeft,
  faKey,
  faSignature,
  faFilter,
  faSortAmountUp,
  faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../scripts';
import '../../assets/scss/main.scss';
import configureStore from './store/configure-store';
import Root from './components/Root';

library.add(
  faUser,
  faSignOutAlt,
  faEnvelope,
  faUnlock,
  faAlignLeft,
  faKey,
  faSignature,
  faFilter,
  faSortAmountUp,
  faSortAmountDown,
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
);

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app'),
);
