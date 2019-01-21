import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Account from '../containers/Account';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Account} />
        </Switch>
      </Router>
    </Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
