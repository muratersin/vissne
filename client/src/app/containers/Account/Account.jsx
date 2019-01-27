import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from '../../components/ProfileContainer';
import ImageUpload from '../../components/ImageUpload';
import './Account.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uploadAvatarImage = this.uploadAvatarImage.bind(this);
    this.toggleAvatarMenu = this.toggleAvatarMenu.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    getAccountDetail();
  }

  uploadAvatarImage($event) {
    const form = document.forms.namedItem('avatarForm');
    const formData = new FormData(form);
    const { uploadImage } = this.props;
    uploadImage(formData, 'avatar');
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
      account,
      loading,
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
                    src={`${vissne.cdn}/ucontent/avatar/${account.user.avatar}`}
                    className="img-fluid rounded-circle border avatar"
                    alt="Avatar"
                    id="avatar"
                  />
                </button>
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
  uploadImage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
