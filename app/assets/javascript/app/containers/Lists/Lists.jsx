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

  render() {
    const { query, showModal } = this.state;
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
                <FontAwesomeIcon icon="plus-square" /> Create List
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
        <Modal show={showModal} title="Create List" cancel={this.toggleModal}>
          <h1>Modal COntent</h1>
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
