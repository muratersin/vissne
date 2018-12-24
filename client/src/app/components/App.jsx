import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MovieList from './common/MovieList';

import Navbar from './common/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getMovies, filter } = this.props;
    getMovies(filter);
  }

  render() {
    const { movies } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid">
          <MovieList movies={movies} />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.instanceOf(Object).isRequired,
};
