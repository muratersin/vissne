import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Account from '../containers/Account';

// Shared Components
import Alert from '../containers/Alert';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/profile" exact component={Account} />
          <Route component={() => { window.location.href = `${vissne.domain}/page-not-found`; }} />
        </Switch>
      </Router>
      <Alert />
    </Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
