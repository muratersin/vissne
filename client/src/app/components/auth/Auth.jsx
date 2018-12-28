import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Auth.scss';

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rememberMe: false,
      validation: {
        email: {},
        password: {},
        firstName: {},
        lastName: {},
        confirmPassword: {},
      },
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: (name === 'rememberMe')
        ? target.checked
        : value,
    });
  }

  validation() {
    const emailInput = document.querySelector('input[name="email"]');
    const { validation } = this.state;
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      isRegister,
    } = this.state;
    let isValid = true;

    if (!email || !emailInput.checkValidity()) {
      validation.email = {
        class: 'is-danger',
        error: <p className="help is-danger">Please enter a valid email address.</p>,
      };
      isValid = false;
    }

    if (!password || password.length < 6 || password.length > 16) {
      validation.password = {
        class: 'is-danger',
        error: <p className="help is-danger">Passwords must be 6-16 chacracter.</p>,
      };
      isValid = false;
    }

    if (isRegister) {
      if (!firstName || firstName.length < 2 || firstName.length > 40) {
        validation.firstName = {
          class: 'is-danger',
          error: <p className="help is-danger">First name must be 2-40 character</p>,
        };
        isValid = false;
      }

      if (!lastName || lastName.length < 2 || lastName.length > 40) {
        validation.lastName = {
          class: 'is-danger',
          error: <p className="help is-danger">Last name must be 2-40 character</p>,
        };
        isValid = false;
      }

      if (confirmPassword !== password) {
        validation.confirmPassword = {
          class: 'is-danger',
          error: <p className="help is-danger">Passwords dont match</p>,
        };
        isValid = false;
      }
    }

    this.setState({ validation });
    return isValid;
  }

  login() {
    const { state, props } = this;
    const isValid = this.validation(state);
    const method = state.isRegister
      ? 'register'
      : 'login';

    if (isValid) {
      props[method](state);
    }
  }

  switchForm() {
    this.setState(prevState => ({
      isRegister: !prevState.isRegister,
    }));
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      rememberMe,
      isRegister,
      validation,
    } = this.state;
    const { props } = this;
    const buttonText = isRegister ? 'Register' : 'Login';
    const switchRegisterToLoginText = isRegister ? 'Login' : 'Register';

    if (props.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }

    const rememberMeCheckBox = !isRegister
      ? (
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="rememberMe"
                type="checkbox"
                id="rememberMeCheck"
                onChange={this.handleChange}
                value={rememberMe}
              />
              Remember Me
            </label>
          </div>
        </div>
      ) : <span />;

    const registerInput = isRegister
      ? (
        <React.Fragment>
          <div className="field">
            <label className="label">
              Confirm Password
            </label>
            <div className="control has-icons-left">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPasswordInput"
                onChange={this.handleChange}
                autoComplete="confirmPassword"
                placeholder="Confirm Password"
                aria-describedby="confirmPassword"
                className={`input ${validation.confirmPassword.class || ''}`}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="unlock" />
              </span>
            </div>
            {validation.confirmPassword.error}
          </div>
          <div className="field">
            <label className="label">
              First Name
            </label>
            <div className="control has-icons-left">
              <input
                type="text"
                name="firstName"
                aria-describedby="firstName"
                id="firstNameInput"
                placeholder="First Name"
                value={firstName}
                onChange={this.handleChange}
                className={`input ${validation.firstName.class || ''}`}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="user" />
              </span>
            </div>
            {validation.firstName.error}
          </div>
          <div className="field auth-group">
            <label className="label">
              Last Name
            </label>
            <div className="control has-icons-left">
              <input
                type="text"
                autoComplete="lastName"
                className={`input ${validation.lastName.class || ''}`}
                name="lastName"
                aria-describedby="lastName"
                id="lastNameInput"
                placeholder="Last Name"
                value={lastName}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="user" />
              </span>
            </div>
            {validation.lastName.error}
          </div>
        </React.Fragment>
      ) : null;

    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-fifths">
            <div className="has-text-centered">
              <img src="images/logo.png" alt="Vissne" height="70" className="auth-logo" />
            </div>
            <form onSubmit={this.handleSubmit} id="formReg">
              <div className="field">
                <label className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="emailInput"
                    autoComplete="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    className={`input ${validation.email.class || ''}`}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </div>
                {validation.email.error}
              </div>
              <div className="field">
                <label className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="passwordInput"
                    placeholder="Password"
                    aria-describedby="password"
                    onChange={this.handleChange}
                    autoComplete="current-password"
                    className={`input ${validation.password.class || ''}`}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="unlock" />
                  </span>
                </div>
                {validation.password.error}
              </div>
              {registerInput}
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    {rememberMeCheckBox}
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button
                      className="button is-text"
                      onClick={this.switchForm}
                      type="button"
                    >
                      {switchRegisterToLoginText}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="button is-fullwidth is-primary is-rounded"
                onClick={this.login}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// TODO: Add Facebook, google and twitter login options.
