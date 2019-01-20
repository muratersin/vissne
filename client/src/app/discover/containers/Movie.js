import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { getMovieDetail } from '../actions/MovieActions';

const mapStateToProps = state => ({
  detail: state.movie.detail,
  user: state.discover.user,
  isLoggedIn: state.discover.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetail: id => dispatch(getMovieDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
