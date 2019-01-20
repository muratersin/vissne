import { connect } from 'react-redux';
import Discover from '../components/Discover';
import { getMovies, setQuery, getGenres } from '../actions/DiscoverActions';

const mapStateToProps = state => ({
  loading: state.common.loading,
  user: state.discover.user,
  query: state.discover.query,
  isLoggedIn: state.discover.isLoggedIn,
  movies: state.discover.movies,
  genres: state.discover.genres,
});

const mapDispatchToProps = dispatch => ({
  getMovies: query => dispatch(getMovies(query)),
  setQuery: query => dispatch(setQuery(query)),
  getGenres: () => dispatch(getGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discover);
