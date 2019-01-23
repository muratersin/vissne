import { connect } from 'react-redux';

import Auth from './Auth';
import { loginRegister } from '../../actions/auth';
import './Auth.scss';

const mapStateToProps = state => ({
  loading: state.common.loading,
  isLoggedIn: state.discover.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginRegister: (data, url) => dispatch(loginRegister(data, url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
