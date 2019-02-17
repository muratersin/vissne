import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import ProfileContainer from '../../components/ProfileContainer';
import TableList from '../../components/TableList';
import Modal from '../../components/Modal';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      selected: {},
      query: {
        page: 1,
        limit: 10,
      },
    };

    this.setQuery = this.setQuery.bind(this);
    this.getLists = this.getLists.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    this.getLists();
    getAccountDetail();
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
      query,
      showModal,
      list,
      selected,
    } = this.state;
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
          <TableList
            title="My Lists"
            data={lists}
            onCreate={this.create}
            onDelete={this.destroy}
            onEdit={this.update}
            onSelect={s => this.setState({ selected: s })}
            selected={selected}
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
  total: 0,
};

Lists.propTypes = {
  toggleAlertDialog: PropTypes.func.isRequired,
  getListByCurrentUser: PropTypes.func.isRequired,
  getAccountDetail: PropTypes.func.isRequired,
  saveList: PropTypes.func.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
};
