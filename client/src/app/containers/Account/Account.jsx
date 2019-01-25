import React, { Component } from 'react';

import ProfileContainer from '../../components/ProfileContainer';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      match,
      user,
    } = this.props;

    return (
      <ProfileContainer path={match.path}>
        <div className="row">
          <div className="col">
            <h1>Account</h1>
          </div>
          <div className="col">
            <figure className="figure">
              <img src={user.avatarPath || vissne.defaultProfileImagePath} className="figure-img img-fluid rounded-circle" alt="Avatar" />
              <figcaption className="figure-caption">Your avatar</figcaption>
            </figure>
          </div>
        </div>
      </ProfileContainer>
    );
  }
}
