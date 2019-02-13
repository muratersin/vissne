import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ path, items }) => {
  const menuItems = items.map(m => (
    <li className="nav-item" key={m.path}>
      <Link
        className={`nav-link ${m.path === path ? 'active' : ''}`}
        to={m.path}
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

Menu.propTypes = {
  path: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
