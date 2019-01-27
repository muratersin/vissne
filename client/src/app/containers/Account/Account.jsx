import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProfileContainer from '../../components/ProfileContainer';
import './Account.scss';

export default class Account extends Component {
  static choseAvatar() {
    document.getElementById('avatar').click();
  }

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
      account,
      loading,
    } = this.props;

    return (
      <ProfileContainer path={match.path} loading={loading}>
        <div className="card">
          <div className="card-body">
            <div className="col d-flex justify-content-center">
              <figure className="figure d-flex justify-content-center align-items-center position-relative">
                <img
                  src={`${vissne.cdn}/upload/avatar/${account.user.avatar}`}
                  className="figure-img img-fluid rounded-circle border avatar"
                  alt="Avatar"
                />
                <div className="avatar-button rounded-circle position-absolute bg-dark d-flex justify-content-center">
                  <button type="button" className="btn btn-primary" onClick={Account.choseAvatar}>
                    <FontAwesomeIcon icon="edit" />
                  </button>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <form className="invisible">
          <input type="file" id="avatar" />
        </form>
      </ProfileContainer>
    );
  }
}
