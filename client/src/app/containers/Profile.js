import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';

const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  changePassword: () => dispatch(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
