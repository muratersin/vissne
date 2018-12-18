import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root';
import '../../assets/scss/main.scss';
import vissneApp from './reducers';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo);

const store = createStore(vissneApp);

render(<Root store={store} />, document.getElementById('app'));
