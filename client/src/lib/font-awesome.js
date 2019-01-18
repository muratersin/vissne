import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faSignOutAlt,
  faEnvelope,
  faUnlock,
  faAlignLeft,
  faKey,
  faSignature,
  faFilter,
  faSortAmountUp,
  faSortAmountDown,
  faUserCircle,
  faList,
  faStar,
  faHeart,
  faComment,
  faSwatchbook,
  faUserFriends,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function init() {
  library.add(
    faUser,
    faSignOutAlt,
    faEnvelope,
    faUnlock,
    faAlignLeft,
    faKey,
    faSignature,
    faFilter,
    faSortAmountUp,
    faSortAmountDown,
    faFacebook,
    faGoogle,
    faTwitter,
    faInstagram,
    faUserCircle,
    faList,
    faStar,
    faHeart,
    faComment,
    faSwatchbook,
    faUserFriends,
    faCog,
  );
}
