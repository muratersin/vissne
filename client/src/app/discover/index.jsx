import React from 'react';
import { render } from 'react-dom';

import '../../scripts';
import '../../../assets/scss/main.scss';
import configureStore from './configure-store';
import Root from './Root';
import fontAwesome from '../../lib/font-awesome';

fontAwesome(); // init font awsome icons

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app'),
);
