import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import PageLoading from '../PageLoading';
import profileMenu from '../../constants/profile-menu';
import './ProfileContainer.scss';

export default function ProfileContainer(props) {
  const { children, path, loading } = props;

  if (loading) {
    return <PageLoading show />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 d-none d-md-block bg-dark sidebar shadow p-0">
          <div className="d-flex justify-content-center">
            <Link to="/" className="m-4">
              <img
                src={`${vissne.cdn}/images/logo.png`}
                alt="Vissne"
                height="100"
                className="border rounded-circle p-2"
              />
            </Link>
          </div>
          <Menu items={profileMenu} path={path} />
        </div>
        <div className="col-md-9 ml-sm-auto col-lg-10 p-4 position-relative">
          {children}
        </div>
      </div>
    </div>
  );
}
