import { connect } from 'react-redux';
import { toggleAlert } from '../actions/common';
import { login, register } from '../actions/auth';
import Auth from '../components/auth/Auth';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = dispatch => ({
  toggleAlert: message => dispatch(toggleAlert(message)),
  login: user => dispatch(login(user)),
  register: user => dispatch(register(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
