import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Login from './Login/Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login/" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root
