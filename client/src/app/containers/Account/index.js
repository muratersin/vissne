import { connect } from 'react-redux';

import Account from './Account';
import { getAccountDetail } from '../../actions/account';
import { uploadImage } from '../../actions/common';

const mapStateToProps = state => ({
  loading: state.common.loading,
  account: state.account,
});

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
  uploadImage: (data, kind) => dispatch(uploadImage(data, kind)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
