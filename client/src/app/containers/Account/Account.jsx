import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import ProfileContainer from '../../components/ProfileContainer';
import './Account.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      form: {},
      password: {},
      validation: {
        userName: {},
        email: {},
        oldPassword: {},
        newPassword: {},
        confirmNewPassword: {},
        firstName: {},
        lastName: {},
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    getAccountDetail();
  }

  handleChange({ target }, field) {
    const { value, name } = target;
    const { state } = this;
    state[field][name] = value;
    this.state = state;
    this.forceUpdate();
  }

  render() {
    const {
      editMode,
      validation,
    } = this.state;
    const {
      match,
      user,
      loading,
    } = this.props;

    let content = null;

    if (editMode) {
      content = (
        <form action="">
          <div className="forum-group mb-2">
            <label htmlFor="userNameInput">User Name</label>
            <input
              type="text"
              name="userName"
              className={`form-control ${validation.userName.class || ''}`}
              value={user.userName}
              id="userNameInput"
              onCHange={e => this.handleChange(e, 'form')}
            />
            {validation.userName.error}
          </div>
          <div className="forum-group mb-2">
            <label htmlFor="firstNameInput">First Name</label>
            <input
              type="text"
              name="firstName"
              className={`form-control ${validation.firstName.class || ''}`}
              value={user.firstName}
              id="firstNameInput"
              onCHange={e => this.handleChange(e, 'form')}
            />
            {validation.firstName.error}
          </div>
          <div className="forum-group mb-2">
            <label htmlFor="lastNameInput">Last Name</label>
            <input
              type="text"
              name="lastName"
              className={`form-control ${validation.lastName.class || ''}`}
              value={user.lastName}
              id="lastNameInput"
              onCHange={e => this.handleChange(e, 'form')}
            />
            {validation.lastName.error}
          </div>
          <div className="forum-group mb-2">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${validation.email.class || ''}`}
              value={user.email}
              id="emailInput"
              onCHange={e => this.handleChange(e, 'form')}
            />
            {validation.email.error}
          </div>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => this.setState({ editMode: false })}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            type="button"
          >
            Save
          </button>
        </form>
      );
    } else {
      content = (
        <table className="table table-borderless">
          <thead>
            <th scope="col">#</th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.setState({ editMode: true })}
              >
                Edit
              </button>
            </th>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Username:</th>
              <td>{user.userName}</td>
            </tr>
            <tr>
              <th scope="row">First Name:</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th scope="row">Last Name:</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th scope="row">Email:</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">Date Of Registration:</th>
              <td>{user.createdAt}</td>
            </tr>
          </tbody>
        </table>
      );
    }


    return (
      <Fragment>
        <Navbar user={user} />
        <ProfileContainer user={user} path={match.path} loading={loading}>
          <div className="row">
            <div className="col m-4">
              <h4>Account</h4>
              {content}
            </div>
            <div className="col m-4">
              <h4>Change Password</h4>
              <form action="">
                <div className="forum-group mb-2">
                  <label htmlFor="oldPasswordInput">Old Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    className={`form-control ${validation.oldPassword.class || ''}`}
                    value={user.oldPassword}
                    id="oldPasswordInput"
                    onCHange={e => this.handleChange(e, 'password')}
                  />
                  {validation.oldPassword.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="newPasswordInput">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className={`form-control ${validation.newPassword.class || ''}`}
                    value={user.newPassword}
                    id="newPasswordInput"
                    onCHange={e => this.handleChange(e, 'password')}
                  />
                  {validation.newPassword.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="confirmNewPasswordInput">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    className={`form-control ${validation.confirmNewPassword.class || ''}`}
                    value={user.confirmNewPassword}
                    id="confirmNewPasswordInput"
                    onCHange={e => this.handleChange(e, 'password')}
                  />
                  {validation.confirmNewPassword.error}
                </div>
              </form>
            </div>
          </div>
        </ProfileContainer>
      </Fragment>
    );
  }
}

Account.propTypes = {
  getAccountDetail: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
