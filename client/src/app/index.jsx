import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faSignOutAlt,
  faEnvelope,
  faUnlock,
  faAlignLeft,
} from '@fortawesome/free-solid-svg-icons';

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
);

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app'),
);
