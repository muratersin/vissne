import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import App from './App';
import Login from '../containers/Login';

// Shared Components
import Alert from '../containers/Alert';
// TODO: Add loading component

const Root = ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login/" component={Login} />
        </Switch>
      </Router>
      <Alert />
    </React.Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
