import { connect } from 'react-redux';

import { toggleAlert } from '../../actions/common';
import Alert from './Alert';
import './Alert.scss';

const mapStateToProps = ({ common }) => ({
  show: common.showAlert,
  message: common.alertMessage,
  kind: common.alertKind,
});

const mapDispatchToProps = dispatch => ({
  toggleAlert: () => dispatch(toggleAlert({ show: false })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
