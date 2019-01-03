import { connect } from 'react-redux';
import { login, register } from '../actions/auth';
import Auth from '../components/auth/Auth';

const mapStateToProps = state => ({
  isLoggedIn: state.app.isLoggedIn,
  loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  register: user => dispatch(register(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
