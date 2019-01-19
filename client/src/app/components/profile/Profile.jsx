import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from '../common/Navbar';
import LeftMenu from './LeftMenu';
import NotFound from '../not-found/NotFound';
import User from './User';

export default class Profile extends Component {
  componentDidMount() {
    const { getProfileDetail } = this.props;
    getProfileDetail();
  }

  render() {
    const {
      isLoggedIn,
      user,
    } = this.props;

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-0 h-100 rounded-0">
              <LeftMenu />
            </div>
            <div className="col">
              <Router>
                <Switch>
                  <Route path="/profile" exact component={User} />
                  <Route path="/profile/lists" component={User} />
                  <Route path="/profile/favorites" component={User} />
                  <Route path="/profile/comments" component={User} />
                  <Route path="/profile/reviews" component={User} />
                  <Route path="/profile/friends" component={User} />
                  <Route path="/profile/settings" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
