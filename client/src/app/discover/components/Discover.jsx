import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';
import Filter from '../../components/Filter';
import {
  UserShape,
  MovieShape,
  GenreShape,
  FilterShape,
} from '../../../lib/prop-shapes';

export default class Discover extends Component {
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

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <div className="container-fluid">
          <Filter genres={genres} setQuery={this.setQuery} query={query} />
          <MovieList movies={movies} id="list" />
          <div className="d-flex justify-content-center m-1">
            <button
              type="button"
              onClick={this.loadMovies}
              className={`btn btn-outline-primary mb-2 ${loading ? 'd-none' : 'd-block'}`}
            >
              Load More
            </button>
            <Spinner show={loading} size="md" />
          </div>
        </div>
      </Fragment>
    );
  }
}

Discover.defaultProps = {
  isLoggedIn: false,
  user: {},
};

Discover.propTypes = {
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
