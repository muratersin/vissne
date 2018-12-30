import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../common/Navbar';
import ProgressBar from '../common/PropgressBar';
import DetailTable from './DetailTable';
import CompanyList from '../common/CompanyList';

import './Movie.scss';

export default class Movie extends Component {
  componentDidMount() {
    const { getMovieDetail, match } = this.props;
    getMovieDetail(match.params.id);
  }

  render() {
    const { detail, user, isLoggedIn } = this.props;

    if (!detail) {
      return (
        <Fragment>
          <Navbar isLoggedIn={isLoggedIn} user={user} />
          <ProgressBar show color="info" />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <div className="container is-fluid detail-page">
          <div className="columns">
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img className="card-img" src={detail.posterPath} alt={detail.title} />
                  </figure>
                </div>
              </div>
            </div>

            <div className="column is-8">
              <DetailTable movie={detail} />
              <CompanyList companies={detail.production_companies} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Movie.propTypes = {
  getMovieDetail: PropTypes.func.isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.arrayOf.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // }).isRequired,
};
