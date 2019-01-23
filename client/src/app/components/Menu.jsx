import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ path, items }) => {
  const menuItems = items.map(m => (
    <Link
      className={`list-group-item list-group-item-action rounded-0 ${m.path === path ? 'active' : ''}`}
      to={m.path}
      key={m.path}
    >
      <FontAwesomeIcon icon={m.icon} />
      <span className="ml-2">{m.name}</span>
    </Link>
  ));

  return (
    <div className="list-group">
      {menuItems}
    </div>
  );
};

export default Menu;
