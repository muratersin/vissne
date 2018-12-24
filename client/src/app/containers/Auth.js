import { connect } from 'react-redux';
import { login, register } from '../actions/auth';
import Auth from '../components/auth/Auth';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  register: user => dispatch(register(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
