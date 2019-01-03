import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MovieList from './common/MovieList';
import Navbar from './common/Navbar';
import Spinner from './common/Spinner';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.autoLoad = this.autoLoad.bind(this);
  }

  componentDidMount() {
    const {
      getMovies,
      filter,
    } = this.props;

    getMovies(1, filter);

    window.onscroll = () => {
      const scy = Number.parseInt(window.scrollY, 10);
      if ((window.innerHeight + scy) >= document.body.offsetHeight) {
        this.autoLoad();
      }
    };
  }

  autoLoad() {
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
    } = this.props;

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} setFilter={setFilter} />
        <MovieList movies={movies} id="list" />
        <div className="d-flex justify-content-center m-1">
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
  setFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
