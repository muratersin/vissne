import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Discover from '../containers/Discover';
import Movie from '../containers/Movie';

// Shared Components
import Alert from '../containers/Alert';

const Root = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Discover} />
          <Route path="/coming-soon" component={Discover} />
          <Route path="/in-theaters" component={Discover} />
          <Route path="/movie/:slug/:id" component={Movie} />
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
