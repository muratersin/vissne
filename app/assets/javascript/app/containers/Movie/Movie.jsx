import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import ProgressBar from '../../components/ProgressBar';
import DetailTable from '../../components/DetailTable';
import CompanyList from '../../components/CompanyList';
import CastList from '../../components/CastList';
import Video from '../../components/Video';
import { UserShape } from '../../constants/prop-shapes';

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

    const video = detail.videos.length > 0
      ? <Video videoKey={detail.videos[0].key} />
      : null;

    return (
      <div>
        <Navbar isLoggedIn={isLoggedIn} user={user} />
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <img className="img-fluid mb-2" src={detail.posterPath} alt={detail.title} />
              <CompanyList companies={detail.production_companies} />
            </div>

            <div className="col-12 col-sm-12 col-md-6 mb-2">
              {video}
              <DetailTable movie={detail} />
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-2">
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
  user: UserShape.isRequired,
  isLoggedIn: PropTypes.bool,
};
