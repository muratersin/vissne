import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from '../containers/Home';
import Auth from '../containers/Auth';
import Movie from '../containers/Movie';
import Profile from '../containers/Profile';
import NotFound from './not-found/NotFound';

// Shared Components
import Alert from '../containers/Alert';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/profile" component={Profile} />
          <Route path="/movie/:slug/:id" component={Movie} />
          <Route component={NotFound} />
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
