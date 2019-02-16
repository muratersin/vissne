import React from 'react';

import Menu from './Menu';
import PageLoading from './PageLoading';
import profileMenu from '../constants/profile-menu';

export default function ProfileContainer(props) {
  const { children, path, pageLoading, user } = props;

  if (pageLoading) {
    return <PageLoading show />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="position-relative">
            <button
              type="button"
              className="btn btn-link rounded-circle avatar-button"
            >
              <img
                src={user.avatar || `${vissne.cdn}/ucontent/avatar/default-avatar.jpg`}
                className="img-fluid rounded-circle border avatar"
                alt="Avatar"
                id="avatar"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5>{`@${user.userName}`}</h5>
        </div>
      </div>
      <Menu items={profileMenu} path={path} />
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  );
}
