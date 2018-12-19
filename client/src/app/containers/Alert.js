import { connect } from 'react-redux';
import { toggleAlert } from '../actions';
import Alert from '../components/shared/Alert';

const mapStateToProps = ({ alert }) => {
  return {
    show: alert.show,
    message: alert.message,
    kind: alert.kind,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAlert: () => dispatch(toggleAlert({ show: false })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
