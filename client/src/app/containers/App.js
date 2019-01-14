import { connect } from 'react-redux';
import App from '../components/App';
import { getMovies, setQuery, getGenres } from '../actions/AppActions';

const mapStateToProps = state => ({
  loading: state.common.loading,
  user: state.app.user,
  query: state.app.query,
  isLoggedIn: state.app.isLoggedIn,
  movies: state.app.movies,
  genres: state.app.genres,
});

const mapDispatchToProps = dispatch => ({
  getMovies: query => dispatch(getMovies(query)),
  setQuery: query => dispatch(setQuery(query)),
  getGenres: () => dispatch(getGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
