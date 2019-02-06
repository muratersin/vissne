import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';
import ProfileContainer from '../../components/ProfileContainer';
import { UserShape, matchShape } from '../../constants/prop-shapes';
import Spinner from '../../components/Spinner';
import './Account.scss';

export default class Account extends Component {
  constructor(props) {
    super(props);

    props.setPageLoadingStatus(true);

    this.state = {
      editMode: false,
      userForm: {},
      passwordForm: {},
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

    this.updateUser = this.updateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getAccountDetail } = this.props;
    getAccountDetail();
  }

  updateUser() {
    const { updateUser } = this.props;
    const { userForm } = this.state;
    updateUser(userForm);
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
      match,
      user,
      loading,
      pageLoading,
    } = this.props;
    const { userForm, validation, passwordForm } = this.state;

    if (user && user.id && !userForm.id) {
      this.setState({ userForm: user });
    }

    return (
      <Fragment>
        <Navbar user={user} />
        <ProfileContainer user={user} path={match.path} pageLoading={pageLoading}>
          <div className="row">
            <div className="col m-4">
              <h4>Account</h4>
              <form action="">
                <div className="forum-group mb-2">
                  <label htmlFor="userNameInput">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    className={`form-control ${validation.userName.class || ''}`}
                    value={userForm.userName}
                    id="userNameInput"
                    onChange={e => this.handleChange(e, 'userForm')}
                  />
                  {validation.userName.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="firstNameInput">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${validation.firstName.class || ''}`}
                    value={userForm.firstName}
                    id="firstNameInput"
                    onChange={e => this.handleChange(e, 'userForm')}
                  />
                  {validation.firstName.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="lastNameInput">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${validation.lastName.class || ''}`}
                    value={userForm.lastName}
                    id="lastNameInput"
                    onChange={e => this.handleChange(e, 'userForm')}
                  />
                  {validation.lastName.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${validation.email.class || ''}`}
                    value={userForm.email}
                    id="emailInput"
                    onChange={e => this.handleChange(e, 'userForm')}
                  />
                  {validation.email.error}
                </div>
                <button
                  className="btn btn-outline-success btn-block"
                  type="button"
                  onClick={this.updateUser}
                >
                  <Spinner show={loading} kind="border" color="success" />
                  <span className={loading ? 'd-none' : 'd-block'}>Update</span>
                </button>
              </form>
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
                    value={passwordForm.oldPassword}
                    id="oldPasswordInput"
                    onChange={e => this.handleChange(e, 'password')}
                  />
                  {validation.oldPassword.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="newPasswordInput">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className={`form-control ${validation.newPassword.class || ''}`}
                    value={passwordForm.newPassword}
                    id="newPasswordInput"
                    onChange={e => this.handleChange(e, 'password')}
                  />
                  {validation.newPassword.error}
                </div>
                <div className="forum-group mb-2">
                  <label htmlFor="confirmNewPasswordInput">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    className={`form-control ${validation.confirmNewPassword.class || ''}`}
                    value={passwordForm.confirmNewPassword}
                    id="confirmNewPasswordInput"
                    onChange={e => this.handleChange(e, 'password')}
                  />
                  {validation.confirmNewPassword.error}
                </div>
                <button className="btn btn-outline-primary btn-block" type="button">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </ProfileContainer>
      </Fragment>
    );
  }
}

Account.propTypes = {
  user: UserShape.isRequired,
  match: matchShape.isRequired,
  getAccountDetail: PropTypes.func.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setPageLoadingStatus: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};
