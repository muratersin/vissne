import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getProfileDetail } from '../actions/ProfileActions';

const mapStateToProps = state => ({
  loading: state.common.loading,
  isLoggedIn: state.app.isLoggedIn,
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  getProfileDetail: () => dispatch(getProfileDetail()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
