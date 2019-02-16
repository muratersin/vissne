import { connect } from 'react-redux';

import { toggleAlertDialog } from '../../actions/common';
import AlertDialog from './AlertDialog';
import './AlertDialog.scss';

const mapStateToProps = ({ common }) => ({
  show: common.showAlert,
  message: common.alertMessage,
  kind: common.alertKind,
});

const mapDispatchToProps = dispatch => ({
  toggleAlertDialog: () => dispatch(toggleAlertDialog({ show: false })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertDialog);
