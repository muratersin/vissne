import React from 'react';

import Menu from './Menu';
import profileMenu from '../constants/profile-menu';

export default function ProfileContainer(props) {
  const { children, path } = props;

  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-2">
        <Menu items={profileMenu} path={path} />
      </div>
      <div className="col">
        {children}
      </div>
    </div>
  );
}
