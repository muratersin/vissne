import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import App from '../containers/App';
import Movie from '../containers/Movie';
import Profile from '../containers/Profile';

// Shared Components
import Alert from '../containers/Alert';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/profile" component={Profile} />
          <Route path="/movie/:slug/:id" component={Movie} />
          <Route component={() => { window.location.href = 'page-not-found'; }} />
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
