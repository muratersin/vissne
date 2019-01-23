import { connect } from 'react-redux';

import Discover from './Discover';
import { toggleFilter } from '../../actions/common';
import {
  getMovies,
  setQuery,
  getGenres,
} from '../../actions/discover';

const mapStateToProps = state => ({
  loading: state.common.loading,
  user: state.discover.user,
  query: state.discover.query,
  isLoggedIn: state.discover.isLoggedIn,
  movies: state.discover.movies,
  genres: state.discover.genres,
  showFilter: state.common.showFilter,
});

const mapDispatchToProps = dispatch => ({
  getMovies: query => dispatch(getMovies(query)),
  setQuery: query => dispatch(setQuery(query)),
  getGenres: () => dispatch(getGenres()),
  toggleFilter: show => dispatch(toggleFilter(show)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discover);
