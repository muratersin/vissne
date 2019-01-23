import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MovieList from '../../components/MovieList';
import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
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
    const { getGenres, toggleFilter, match } = this.props;
    const { path } = match;

    getGenres();

    if (['/coming-soon', '/in-theaters'].indexOf(path) !== -1) {
      this.setQuery({ field: 'filter', value: path.replace('/', '') });
      toggleFilter(false);
    } else {
      this.loadMovies();
    }
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
      location,
      showFilter,
    } = this.props;

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} pathName={location.pathname} />
        <div className="container-fluid">
          <Filter show={showFilter} genres={genres} setQuery={this.setQuery} query={query} />
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
        <Footer />
      </Fragment>
    );
  }
}

Discover.defaultProps = {
  isLoggedIn: false,
  showFilter: true,
  user: {},
};

Discover.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool,
  showFilter: PropTypes.bool,
  user: UserShape,
  movies: PropTypes.arrayOf(MovieShape).isRequired,
  genres: PropTypes.arrayOf(GenreShape).isRequired,
  query: FilterShape.isRequired,
};
