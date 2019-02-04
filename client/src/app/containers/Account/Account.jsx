import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import ProfileContainer from '../../components/ProfileContainer';
import './Account.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    getAccountDetail();
  }

  render() {
    const {
      match,
      user,
      loading,
    } = this.props;

    return (
      <Fragment>
        <Navbar user={user} />
        <ProfileContainer user={user} path={match.path} loading={loading}>
          <h1>asd</h1>
        </ProfileContainer>
      </Fragment>
    );
  }
}

Account.propTypes = {
  getAccountDetail: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
