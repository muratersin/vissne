import { connect } from 'react-redux';
import { toggleAlert } from '../actions';
import Login from '../components/login/Login';

const mapStateToProps = state => ({
  showAlert: state.common.showAlert,
});

const mapDispatchToProps = dispatch => ({
  toggleAlert: message => dispatch(toggleAlert(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
