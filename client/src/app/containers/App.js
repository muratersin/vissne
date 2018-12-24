import { connect } from 'react-redux';
import App from '../components/App';
import { getMovies, setFilter } from '../actions/app';

const mapStateToProps = state => ({
  movies: state.app.movies,
  filter: state.app.filter,
});

const mapDispatchToProps = dispatch => ({
  getMovies: filter => dispatch(getMovies(filter)),
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
