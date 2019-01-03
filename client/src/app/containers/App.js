import { connect } from 'react-redux';
import App from '../components/App';
import { getMovies, setFilter } from '../actions/app';

const mapStateToProps = state => ({
  loading: state.common.loading,
  user: state.app.user,
  filter: state.app.filter,
  isLoggedIn: state.app.isLoggedIn,
  movies: state.app.movies,
});

const mapDispatchToProps = dispatch => ({
  getMovies: (page, filter) => dispatch(getMovies(page, filter)),
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
