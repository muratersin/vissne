import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieList from './common/MovieList';
import Navbar from './common/Navbar';
import Spinner from './common/Spinner';
import Footer from './common/Footer';
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
    this.setQuery = this.setQuery.bind(this);
  }

  componentDidMount() {
    const { getGenres } = this.props;
    getGenres();
    this.loadMovies();
  }

  setQuery(query) {
    const { setQuery } = this.props;
    setQuery(query).then(this.loadMovies);
  }

  loadMovies() {
    const { getMovies, query } = this.props;
    getMovies(query);
  }

  render() {
    const {
      movies,
      user,
      isLoggedIn,
      loading,
      genres,
      query,
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
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <MovieList movies={movies} genres={genres} setQuery={this.setQuery} query={query} id="list" />
        <div className="d-flex justify-content-center m-1">
          {loadMoreButton}
          <Spinner show={loading} size="md" />
        </div>
        <Footer />
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
  setQuery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool,
  user: UserShape,
  movies: PropTypes.arrayOf(MovieShape).isRequired,
  genres: PropTypes.arrayOf(GenreShape).isRequired,
  query: FilterShape.isRequired,
};
