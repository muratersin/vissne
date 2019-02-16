import { connect } from 'react-redux';

import { getListByCurrentUser, saveList, deleteList } from '../../actions/lists';
import { getAccountDetail } from '../../actions/account';
import { toggleAlertDialog } from '../../actions/common';
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
  saveList: (list, callback) => dispatch(saveList(list, callback)),
  deleteList: (id, callback) => dispatch(deleteList(id, callback)),
  getAccountDetail: () => dispatch(getAccountDetail()),
  toggleAlertDialog: alert => dispatch(toggleAlertDialog(alert)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
