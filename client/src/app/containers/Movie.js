import { connect } from 'react-redux';
import Movie from '../components/movie/Movie';
import { getMovieDetail } from '../actions/movie';

const mapStateToProps = state => ({
  detail: state.movie.detail,
  user: state.app.user,
  isLoggedIn: state.app.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetail: id => dispatch(getMovieDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
