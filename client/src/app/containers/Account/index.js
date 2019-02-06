import { connect } from 'react-redux';

import Account from './Account';
import { getAccountDetail, updateUserAccount, changePassword } from '../../actions/account';

const mapStateToProps = state => ({
  loading: state.common.loading,
  uploadedFile: state.common.uploadedFile,
  user: state.account.user,
});

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
  updateUserAccount: user => dispatch(updateUserAccount(user)),
  changePassword: password => dispatch(changePassword(password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
