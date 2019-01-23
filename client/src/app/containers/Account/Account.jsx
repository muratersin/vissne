import React, { Component } from 'react';

import ProfileContainer from '../../components/ProfileContainer';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <ProfileContainer path={match.path}>
        <h1>Account</h1>
      </ProfileContainer>
    );
  }
}
