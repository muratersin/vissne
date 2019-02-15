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
      list: {},
      query: {
        page: 1,
        limit: 10,
      },
    };

    this.setQuery = this.setQuery.bind(this);
    this.getLists = this.getLists.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.getLists();
  }

  setQuery(query) {
    this.setState(prevState => ({
      query: Object.assign(prevState.query, query),
    }), this.getLists);
  }

  getLists() {
    const { getListByCurrentUser } = this.props;
    const { query } = this.state;
    getListByCurrentUser(query);
  }

  create() {
    this.setState({ list: {} });
    this.toggleModal();
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
      value = value === 'true';
    }

    list[name] = value;

    this.setState({ list });
  }

  save() {
    const { list } = this.state;
    const { saveList } = this.props;
    saveList(list);
  }

  render() {
    const { query, showModal, list } = this.state;
    const {
      match,
      user,
      pageLoading,
      total,
      tableFields,
      lists,
    } = this.props;

    return (
      <Fragment>
        <Navbar user={user} />
        <ProfileContainer user={user} path={match.path} pageLoading={pageLoading}>
          <div className="row mt-2">
            <div className="col d-flex justify-content-end">
              <button className="btn btn-outline-primary" type="button" onClick={this.create}>
                <FontAwesomeIcon icon="plus-square" />
                <span className="ml-1">Create List</span>
              </button>
            </div>
          </div>
          <TableList
            title="My Lists"
            data={lists}
            fields={tableFields}
            pagination={{
              total,
              page: query.page,
              limit: query.limit,
              buttonCount: 5,
              onPaginate: this.setQuery,
            }}
          />
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
                  value="true"
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
                  value="false"
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
  total: 0,
};

Lists.propTypes = {
  getListByCurrentUser: PropTypes.func.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
};
