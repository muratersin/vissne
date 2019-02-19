import { connect } from 'react-redux';
import Movie from './Movie';
import { getMovieDetail } from '../../actions/movie';
import { getListByCurrentUser, addToList, removeFromList } from '../../actions/lists';

const mapStateToProps = state => ({
  detail: state.movie.detail,
  user: state.discover.user,
  isLoggedIn: state.discover.isLoggedIn,
  lists: state.lists.lists,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetail: id => dispatch(getMovieDetail(id)),
  getListByCurrentUser: (query, movieId) => dispatch(getListByCurrentUser(query, movieId)),
  addToList: (listMovie, callback) => dispatch(addToList(listMovie, callback)),
  removeFromList: (listMovie, callback) => dispatch(removeFromList(listMovie, callback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
