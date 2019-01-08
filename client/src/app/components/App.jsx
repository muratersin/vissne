import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieList from './common/MovieList';
import Navbar from './common/Navbar';
import Spinner from './common/Spinner';
import Filter from './common/Filter';
import {
  UserShape,
  MovieShape,
  GenreShape,
  FilterShape,
} from '../../lib/prop-shapes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    const {
      getMovies,
      getGenres,
      filter,
      page,
    } = this.props;

    getGenres();
    getMovies(page, filter);
  }

  loadMovies() {
    const { getMovies, page, filter } = this.props;
    getMovies(page, filter);
  }

  render() {
    const {
      movies,
      user,
      isLoggedIn,
      setFilter,
      loading,
      genres,
      filter,
    } = this.props;

    const loadMoreButton = !loading
      ? (
        <button
          type="button"
          onClick={this.loadMovies}
          className="btn btn-outline-primary mb-2"
        >
          Load More
        </button>
      ) : null;

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} setFilter={setFilter} />
        <Filter genres={genres} filter={filter} />
        <MovieList movies={movies} id="list" />
        <div className="d-flex justify-content-center m-1">
          {loadMoreButton}
          <Spinner show={loading} size="md" />
        </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  user: {},
};

App.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool,
  user: UserShape,
  page: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(MovieShape).isRequired,
  genres: PropTypes.arrayOf(GenreShape).isRequired,
  filter: FilterShape.isRequired,
};
