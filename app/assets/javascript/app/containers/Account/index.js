import { connect } from 'react-redux';

import Account from './Account';
import { getAccountDetail, changePassword, updateUser } from '../../actions/account';
import { setPageLoadingStatus, toggleAlertDialog } from '../../actions/common';

const mapStateToProps = state => ({
  pageLoading: state.common.pageLoading,
  loading: state.common.loading,
  uploadedFile: state.common.uploadedFile,
  user: state.account.user,
});

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
  setPageLoadingStatus: status => dispatch(setPageLoadingStatus(status)),
  updateUser: user => dispatch(updateUser(user)),
  changePassword: password => dispatch(changePassword(password)),
  toggleAlertDialog: alert => dispatch(toggleAlertDialog(alert)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
