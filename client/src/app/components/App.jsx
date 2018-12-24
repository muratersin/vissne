import React, { Component, Fragment } from 'react';

import MovieList from './common/MovieList';

import Navbar from './common/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid img-thumbnail">
          <MovieList movies={[]} />
        </div>
      </Fragment>
    );
  }
}
