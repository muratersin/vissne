import { connect } from 'react-redux';

import Lists from './Lists';
import { getAccountDetail } from '../../actions/account';
import { toggleAlertDialog } from '../../actions/common';
import {
  getListByCurrentUser,
  saveList,
  deleteList,
  getListMovies,
  removeFromList,
} from '../../actions/lists';

const mapStateToProps = state => ({
  lists: state.lists.lists,
  total: state.lists.total,
  movies: state.lists.movies,
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
  getListMovies: query => dispatch(getListMovies(query)),
  removeFromList: listMovie => dispatch(removeFromList(listMovie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
