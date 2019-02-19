import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../../components/Navbar';
import ProfileContainer from '../../components/ProfileContainer';
import TableList from '../../components/TableList';
import Modal from '../../components/Modal';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieQuery: {
        page: 1,
        limit: 10,
      },
      listQuery: {
        page: 1,
        limit: 10,
      },
      list: {},
      selected: {},
      selectedMovie: {},
      movieTableFields: [{
        title: 'Id',
        name: 'id',
        hidden: true,
      }, {
        title: 'Poster',
        name: 'poster',
        format(src) {
          return <img height="70" src={src} alt="List Movie" />;
        },
      }, {
        title: 'Title',
        name: 'title',
      }, {
        title: 'Rating',
        name: 'rating',
      }],
      listTableFields: [{
        title: 'Id',
        name: 'id',
        hidden: true,
      }, {
        title: 'Name',
        name: 'name',
      }, {
        title: 'Create Date',
        name: 'createdAt',
        format(value) {
          const date = new Date(value);
          return date.toLocaleDateString();
        },
      }, {
        title: 'Visibility',
        name: 'public',
        format(value) {
          return value ? 'Public' : 'Private';
        },
      }, {
        title: 'Movies',
        name: 'totalMovie',
      }, {
        title: '',
        name: 'id',
        format: id => (
          <div className="d-flex justify-content-center">
            <button className="btn btn-link" type="button" onClick={() => this.showListMovies(id)}>
              <FontAwesomeIcon icon="list" />
            </button>
          </div>
        ),
      }],
    };

    this.setListQuery = this.setListQuery.bind(this);
    this.setMovieQuery = this.setMovieQuery.bind(this);
    this.getLists = this.getLists.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.showListMovies = this.showListMovies.bind(this);
    this.backToList = this.backToList.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    this.getLists();
    getAccountDetail();
  }

  setListQuery(listQuery) {
    this.setState(prevState => ({
      listQuery: Object.assign(prevState.listQuery, listQuery),
    }), this.getLists);
  }

  setMovieQuery(movieQuery) {
    this.setState(prevState => ({
      movieQuery: Object.assign(prevState.movieQuery, movieQuery),
    }), this.getLists);
  }

  getLists() {
    const { getListByCurrentUser } = this.props;
    const { listQuery } = this.state;
    getListByCurrentUser(listQuery);
  }

  getListMovies() {
    const { getListMovies } = this.props;
    const { movieQuery } = this.state;
    if (movieQuery.listId) {
      getListMovies(movieQuery);
    }
  }

  deleteFromList() {
    const { selectedMovie, selected } = this.state;
    const { removeFromList } = this.props;
    removeFromList({
      listId: selected.id,
      movieId: selectedMovie.id,
    });
  }

  backToList() {
    this.setState({
      showMovies: false,
      selectedMovie: {},
      movieQuery: {
        page: 1,
        limit: 10,
      },
    });
  }

  showListMovies(listId) {
    this.setState(prevState => ({
      showMovies: true,
      selected: {},
      movieQuery: Object.assign(prevState.movieQuery, {
        listId,
      }),
    }), this.getListMovies);
  }

  destroy() {
    const { deleteList, toggleAlertDialog } = this.props;
    const { selected } = this.state;

    if (!selected || !selected.id) {
      return toggleAlertDialog({
        kind: 'warning',
        message: 'No selected data.',
      });
    }

    deleteList(selected.id, this.getLists);
  }

  create() {
    this.setState({ list: {} });
    this.toggleModal();
  }

  update() {
    const { selected } = this.state;
    this.setState({
      list: selected,
    }, this.toggleModal);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  handleChange({ target }) {
    const { name } = target;
    const { list } = this.state;
    let value = target.parsedValue || target.value;

    if (name === 'public') {
      value = Number.parseInt(value, 10);
    }

    list[name] = value;

    this.setState({ list });
  }

  save() {
    const { list } = this.state;
    const { saveList } = this.props;

    list.public = Number.parseInt(list.public, 10);

    saveList(list, () => {
      this.getLists();
      this.setState({ list: {} });
      this.toggleModal();
    });
  }

  render() {
    const {
      listQuery,
      movieQuery,
      showModal,
      list,
      selected,
      selectedMovie,
      listTableFields,
      movieTableFields,
      showMovies,
    } = this.state;
    const {
      match,
      user,
      pageLoading,
      totalList,
      totalMovie,
      movies,
      lists,
    } = this.props;

    let content = (
      <TableList
        data={lists}
        onCreate={this.create}
        onDelete={this.destroy}
        onEdit={this.update}
        onSelect={s => this.setState({ selected: s })}
        selected={selected}
        fields={listTableFields}
        pagination={{
          total: totalList,
          page: listQuery.page,
          limit: listQuery.limit,
          buttonCount: 5,
          onPaginate: this.setListQuery,
        }}
      />
    );

    if (showMovies) {
      content = (
        <Fragment>
          <div className="d-flex justify-content-between mt-2">
            <span style={{ fontSize: '26px', fontWeight: 'bold' }}>Movies</span>
            <button type="button" className="btn btn-outline-primary rounded-0" onClick={this.backToList}>Back To List</button>
          </div>
          <TableList
            data={movies}
            onDelete={this.deleteFromList}
            onSelect={s => this.setState({ selectedMovie: s })}
            selected={selectedMovie}
            fields={movieTableFields}
            pagination={{
              total: totalMovie,
              page: movieQuery.page,
              limit: movieQuery.limit,
              buttonCount: 5,
              onPaginate: this.setListQuery,
            }}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Navbar user={user} />
        <ProfileContainer user={user} path={match.path} pageLoading={pageLoading}>
          {content}
        </ProfileContainer>
        <Modal show={showModal} title="Create List" cancel={this.toggleModal} submit={this.save}>
          <div className="form-group">
            <label>List Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="List Name"
              value={list.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="public"
                  value="1"
                  onChange={this.handleChange}
                  checked={list.public}
                />
                <label className="form-check-label">
                  Public List
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="public"
                  value="0"
                  onChange={this.handleChange}
                  checked={!list.public}
                />
                <label className="form-check-label">
                  Private List
                </label>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

Lists.defaultProps = {
  totalList: 0,
  totalMovie: 0,
};

Lists.propTypes = {
  toggleAlertDialog: PropTypes.func.isRequired,
  getListByCurrentUser: PropTypes.func.isRequired,
  getAccountDetail: PropTypes.func.isRequired,
  getListMovies: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  saveList: PropTypes.func.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  totalList: PropTypes.number,
  totalMovie: PropTypes.number,
};
