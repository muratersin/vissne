import { connect } from 'react-redux';

import Account from './Account';
import { getAccountDetail } from '../../actions/account';

const mapStateToProps = state => ({
  loading: state.common.loading,
  uploadedFile: state.common.uploadedFile,
  user: state.account.user,
});

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
