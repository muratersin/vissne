import { connect } from 'react-redux';
import { toggleAlert } from '../actions';
import Alert from '../components/shared/Alert';

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
