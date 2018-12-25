import { connect } from 'react-redux';
import App from '../components/App';
import { getMovies, setFilter } from '../actions/app';

const mapStateToProps = state => state.app;

const mapDispatchToProps = dispatch => ({
  getMovies: (page, filter) => dispatch(getMovies(page, filter)),
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
