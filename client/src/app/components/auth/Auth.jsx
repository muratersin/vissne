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
        class: 'is-invalid',
        error: <div className="invalid-feedback">Please enter a valid email address.</div>,
      };
      isValid = false;
    }

    if (!password || password.length < 6 || password.length > 16) {
      validation.password = {
        class: 'is-invalid',
        error: <div className="invalid-feedback">Passwords must be 6-16 chacracter.</div>,
      };
      isValid = false;
    }

    if (isRegister) {
      if (!firstName || firstName.length < 2 || firstName.length > 40) {
        validation.firstName = {
          class: 'is-invalid',
          error: <div className="invalid-feedback">First name must be 2-40 character</div>,
        };
        isValid = false;
      }

      if (!lastName || lastName.length < 2 || lastName.length > 40) {
        validation.lastName = {
          class: 'is-invalid',
          error: <div className="invalid-feedback">Last name must be 2-40 character</div>,
        };
        isValid = false;
      }

      if (confirmPassword !== password) {
        validation.confirmPassword = {
          class: 'is-invalid',
          error: <div className="invalid-feedback">Passwords dont match</div>,
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
    const { props } = this;
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

    let buttonText = 'LOGIN';
    let switchRegisterToLoginText = 'REGISTER';
    let rememberMeCheckBox = <span />;
    let registerInput = null;

    if (!isRegister) {
      rememberMeCheckBox = (
        <div className="form-group">
          <div className="form-check">
            <input
              name="rememberMe"
              type="checkbox"
              id="rememberMeCheck"
              className="form-check-input"
              onChange={this.handleChange}
              value={rememberMe}
            />
            <label
              className="form-check-label"
              htmlFor="rememberMeCheck"
            >
              Remember Me
            </label>
          </div>
        </div>
      );
    } else {
      buttonText = 'REGISTER';
      switchRegisterToLoginText = 'LOGIN';

      registerInput = (
        <React.Fragment>
          <div className="form-group">
            <label htmlFor="confirmPasswordInput">Confirm Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="confirmPasswordAddon">
                  <FontAwesomeIcon icon="key" />
                </span>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPasswordInput"
                onChange={this.handleChange}
                autoComplete="confirmPassword"
                placeholder="Confirm Password"
                aria-describedby="confirmPasswordAddon"
                className={`form-control ${validation.confirmPassword.class || ''}`}
              />
              {validation.confirmPassword.error}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstNameInput">First Name</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="firstName">
                  <FontAwesomeIcon icon="signature" />
                </span>
              </div>
              <input
                type="text"
                name="firstName"
                aria-describedby="firstName"
                id="firstNameInput"
                placeholder="First Name"
                value={firstName}
                onChange={this.handleChange}
                className={`form-control ${validation.firstName.class || ''}`}
              />
              {validation.firstName.error}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastNameInput">
              Last Name
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="lastName">
                  <FontAwesomeIcon icon="signature" />
                </span>
              </div>
              <input
                type="text"
                autoComplete="lastName"
                className={`form-control ${validation.lastName.class || ''}`}
                name="lastName"
                aria-describedby="lastName"
                id="lastNameInput"
                placeholder="Last Name"
                value={lastName}
                onChange={this.handleChange}
              />
              {validation.lastName.error}
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
            <div className="card auth-form">
              <div className="card-body">
                <div className="row justify-content-center">
                  <img src="images/logo.png" alt="Vissne" height="70" className="my-2" />
                </div>
                <form onSubmit={this.handleSubmit} id="formReg" className="col-12">
                  <div className="form-group">
                    <label htmlFor="emailInput">
                      Email
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon="envelope" />
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        id="emailInput"
                        autoComplete="email"
                        aria-describedby="emailInputGroup"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        className={`form-control ${validation.email.class || ''}`}
                      />
                      {validation.email.error}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="passwordInput">
                      Password
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="passwordAddon">
                          <FontAwesomeIcon icon="unlock" />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        id="passwordInput"
                        placeholder="Password"
                        aria-describedby="passwordAddon"
                        onChange={this.handleChange}
                        autoComplete="current-password"
                        className={`form-control ${validation.password.class || ''}`}
                      />
                      {validation.password.error}
                    </div>
                  </div>

                  {registerInput}

                  <div className="row">
                    <div className="col-6">
                      {rememberMeCheckBox}
                    </div>
                    <div className="col-6 text-right">
                      <button
                        className="btn btn-link"
                        onClick={this.switchForm}
                        type="button"
                      >
                        {switchRegisterToLoginText}
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-dark btn-block"
                    onClick={this.login}
                    disabled={props.loading}
                  >
                    <span
                      className={`spinner-grow spinner-grow-sm ${props.loading ? '' : 'd-none'}`}
                      role="status"
                      aria-hidden="true"
                    />
                    {buttonText}
                  </button>
                </form>
                <div className="col-12 mt-2">
                  <a
                    type="button"
                    className="btn btn-block btn-dark border-0 social-button google"
                    href="auth/google"
                  >
                    <i className="social-button-icon">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </i>
                    LOGIN WITH GOOGLE
                  </a>
                </div>
                <div className="col-12 mt-2">
                  <a
                    type="button"
                    className="btn btn-block btn-dark border-0 social-button facebook"
                    href="auth/facebook"
                  >
                    <i className="social-button-icon">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </i>
                    LOGIN WITH FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// TODO: Add Facebook, google and twitter login options.
