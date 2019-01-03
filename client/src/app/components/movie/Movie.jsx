import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../common/Navbar';
import ProgressBar from '../common/PropgressBar';
import DetailTable from '../common/DetailTable';
import CompanyList from '../common/CompanyList';
import CastList from '../common/CastList';
import Video from '../common/Video';

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
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url(${detail.backdropPath})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img className="card-img" src={detail.posterPath} alt={detail.title} />
                  </figure>
                </div>
              </div>
              <CompanyList companies={detail.production_companies} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6">
              <Video videoKey={detail.videos[0].key} />
              <DetailTable movie={detail} />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <CastList casts={detail.credits.cast} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movie.defaultProps = {
  isLoggedIn: false,
};

Movie.propTypes = {
  getMovieDetail: PropTypes.func.isRequired,
  detail: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  isLoggedIn: PropTypes.bool,
};
