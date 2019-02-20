import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../../components/Navbar';
import ProgressBar from '../../components/ProgressBar';
import DetailTable from '../../components/DetailTable';
import CompanyList from '../../components/CompanyList';
import CastList from '../../components/CastList';
import Video from '../../components/Video';
import { UserShape } from '../../constants/prop-shapes';
import Modal from '../../components/Modal';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListModal: false,
      list: {
        page: 1,
        limit: 10,
      },
    };

    this.toggleListModal = this.toggleListModal.bind(this);
  }

  componentDidMount() {
    const { list } = this.state;
    const { getMovieDetail, getListByCurrentUser, match } = this.props;
    const movieId = match.params.id;
    getMovieDetail(movieId);
    getListByCurrentUser(list, movieId);
  }

  toggleListModal() {
    this.setState(prevState => ({
      showListModal: !prevState.showListModal,
    }));
  }

  render() {
    const { showListModal, list } = this.state;
    const {
      match,
      detail,
      user,
      isLoggedIn,
      lists,
      addToList,
      removeFromList,
      getListByCurrentUser,
    } = this.props;

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
              <div className="mb-2">
                <button className="btn btn-secondary rounded-0" type="button" title="Add To List" onClick={this.toggleListModal}>
                  <FontAwesomeIcon icon="plus-square" />
                </button>
              </div>
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
        <Modal show={showListModal} title="Add To List" cancel={this.toggleListModal}>
          <ul className="list-group">
            {lists.map(l => (
              <li
                className={`list-group-item rounded-0 ${l.isAdded ? 'list-group-item-success' : ' '}`}
              >
                <span className="d-flex justify-content-between">
                  {l.name}
                  <button
                    type="button"
                    className={`btn btn-sm btn-outline-${l.isAdded ? 'danger' : 'success'}`}
                    onClick={() => {
                      const movieId = match.params.id;
                      const listObject = {
                        movieId,
                        listId: l.id,
                      };

                      if (!l.isAdded) {
                        return addToList(listObject, () => {
                          this.toggleListModal();
                          getListByCurrentUser(list, movieId);
                        });
                      }

                      return removeFromList(listObject, () => {
                        this.toggleListModal();
                        getListByCurrentUser(list, movieId);
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={`${l.isAdded ? 'trash' : 'plus-square'}`} />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    );
  }
}

Movie.defaultProps = {
  isLoggedIn: false,
  detail: null,
};

Movie.propTypes = {
  getMovieDetail: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
  getListByCurrentUser: PropTypes.func.isRequired,
  detail: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  lists: PropTypes.instanceOf(Array).isRequired,
  user: UserShape.isRequired,
  isLoggedIn: PropTypes.bool,
};
