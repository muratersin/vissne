import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

import '../scripts';
import Root from './components/Root';
import '../../assets/scss/main.scss';
import vissneApp from './reducers';


library.add(faCompactDisc);

const store = createStore(vissneApp);

render(<Root store={store} />, document.getElementById('app'));
