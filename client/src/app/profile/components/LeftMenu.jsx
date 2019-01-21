import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftMenu = () => (
  <div className="list-group">
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile">
      <FontAwesomeIcon icon="user" />
      <span className="ml-2">Account</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/lists">
      <FontAwesomeIcon icon="list" />
      <span className="ml-2">Lists</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/favorites">
      <FontAwesomeIcon icon="heart" />
      <span className="ml-2">Favorites</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/comments">
      <FontAwesomeIcon icon="comment" />
      <span className="ml-2">Comments</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/reviews">
      <FontAwesomeIcon icon="swatchbook" />
      <span className="ml-2">Reviews</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/friends">
      <FontAwesomeIcon icon="user-friends" />
      <span className="ml-2">Friends</span>
    </Link>
    <Link className="list-group-item list-group-item-action rounded-0" to="/profile/settings">
      <FontAwesomeIcon icon="cog" />
      <span className="ml-2">Settings</span>
    </Link>
  </div>
);

export default LeftMenu;
