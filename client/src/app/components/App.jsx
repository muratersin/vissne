import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieList from './common/MovieList';
import Navbar from './common/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.autoLoad = this.autoLoad.bind(this);
  }

  componentDidMount() {
    const { getMovies, filter } = this.props;
    // getMovies(1, filter);

    // window.onscroll = () => {
    //   const scy = Number.parseInt(window.scrollY, 10);
    //   if ((window.innerHeight + scy) >= document.body.offsetHeight) {
    //     this.autoLoad();
    //   }
    // };
  }

  autoLoad() {
    const { getMovies, page, filter } = this.props;
    getMovies(page, filter);
  }

  render() {
    const { movies, user, isLoggedIn } = this.props;
    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <MovieList movies={movies} id="list" />
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
  isLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
  }),
  page: PropTypes.number.isRequired,
  movies: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.instanceOf(Object).isRequired,
};
