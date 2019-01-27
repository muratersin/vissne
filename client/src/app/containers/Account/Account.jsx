import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from '../../components/ProfileContainer';
import ImageUpload from '../../components/ImageUpload';
import './Account.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleAvatarMenu = this.toggleAvatarMenu.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    getAccountDetail();
  }

  toggleAvatarMenu() {
    this.setState(prevState => ({
      showAvatarMenu: !prevState.showAvatarMenu,
    }));
  }

  render() {
    const { showAvatarMenu } = this.state;
    const {
      match,
      user,
      loading,
      uploadedFile,
    } = this.props;

    const avatarMenu = !showAvatarMenu
      ? null
      : (
        <div className="avatar-menu position-absolute">
          <ImageUpload
            btnClass="btn btn-outline-dark rounded-circle"
            inputId="avatarInput"
            imageId="avatar"
            formName="avatarForm"
          />
        </div>
      );

    return (
      <ProfileContainer path={match.path} loading={loading}>
        <div className="card">
          <div className="card-body">
            <div className="col d-flex justify-content-center">
              <div className="position-relative">
                <button
                  type="button"
                  className="btn btn-link rounded-circle avatar-button"
                  onClick={this.toggleAvatarMenu}
                >
                  <img
                    src={uploadedFile ? uploadedFile.tempPath : (`${vissne.cdn}/ucontent/avatar/${user.avatar}`)}
                    className="img-fluid rounded-circle border avatar"
                    alt="Avatar"
                    id="avatar"
                  />
                </button>
                {uploadedFile ? uploadedFile.tempPath : 'yok'}
                {avatarMenu}
              </div>
            </div>
          </div>
        </div>
      </ProfileContainer>
    );
  }
}

Account.propTypes = {
  getAccountDetail: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
