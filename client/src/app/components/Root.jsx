import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import App from './App';
import Login from '../containers/Login';

// Shared Components
import Alert from '../containers/Alert';
import Loading from '../containers/Loading';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login/" component={Login} />
        </Switch>
      </Router>
      <Alert />
      {/* <Loading /> */}
    </Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
