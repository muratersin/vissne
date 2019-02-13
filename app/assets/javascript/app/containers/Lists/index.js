import { connect } from 'react-redux';

import { getListByCurrentUser } from '../../actions/lists';
import Lists from './Lists';

const mapStateToProps = state => ({
  lists: state.lists.lists,
  total: state.lists.total,
  tableFields: state.lists.tableFields,
  pageLoading: state.common.pageLoading,
  loading: state.common.loading,
  user: state.account.user,
});

const mapDispatchToProps = dispatch => ({
  getListByCurrentUser: query => dispatch(getListByCurrentUser(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
