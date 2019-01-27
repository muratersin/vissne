import { connect } from 'react-redux';

import Account from './Account';
import { getAccountDetail } from '../../actions/account';

const mapStateToProps = state => ({
  loading: state.common.loading,
  account: state.account,
});

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
