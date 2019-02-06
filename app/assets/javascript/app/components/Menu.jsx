import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ path, items }) => {
  const menuItems = items.map(m => (
    <li className="nav-item">
      <Link
        className={`nav-link ${m.path === path ? 'active' : ''}`}
        to={m.path}
        key={m.path}
      >
        <FontAwesomeIcon icon={m.icon} />
        <span className="ml-2">{m.name}</span>
      </Link>
    </li>
  ));

  return (
    <ul className="nav nav-tabs justify-content-center">
      {menuItems}
    </ul>
  );
};

export default Menu;
