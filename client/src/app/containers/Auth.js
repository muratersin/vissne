import { connect } from 'react-redux';
import { login, register, loginWithFacebook } from '../actions/AuthActions';
import Auth from '../components/auth/Auth';

const mapStateToProps = state => ({
  isLoggedIn: state.app.isLoggedIn,
  loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  register: user => dispatch(register(user)),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
