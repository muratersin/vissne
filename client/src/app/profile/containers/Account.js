import { connect } from 'react-redux';

import Account from '../components/Account';
import { getAccountDetail } from '../actions/AccountActions';

const mapStateToProps = state => state.account;

const mapDispatchToProps = dispatch => ({
  getAccountDetail: () => dispatch(getAccountDetail()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
