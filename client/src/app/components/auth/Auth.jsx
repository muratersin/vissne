import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import cookie from '../../../lib/cookie';

import './Auth.scss';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rememberMe: false,
      validation: {},
      userEmail: cookie.get('user_email'),
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
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
    const validation = {};

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      isRegister,
    } = this.state;

    if (!email || !emailInput.checkValidity()) {
      validation.email = 'is-invalid';
    }

    if (!password || password.length < 6 || password.length > 16) {
      validation.password = 'is-invalid';
    }

    if (isRegister) {
      if (!firstName || firstName.length < 2 || firstName.length > 40) {
        validation.firstName = 'is-invalid';
      }

      if (!lastName || lastName.length < 2 || lastName.length > 40) {
        validation.lastName = 'is-invalid';
      }

      if (confirmPassword !== password) {
        validation.confirmPassword = 'is-invalid';
      }
    }

    this.setState({ validation });
    return JSON.stringify(validation) === '{}';
  }

  login() {
    const { state, props } = this;
    const method = state.isRegister
      ? 'register'
      : 'login';

    const isValid = this.validation(state);

    if (isValid) {
      props[method](state);
    }
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
      userEmail,
    } = this.state;
    const { props } = this;
    const buttonText = isRegister ? 'Register' : 'Login';
    const switchRegisterToLoginText = isRegister ? 'Login' : 'Register';

    if (userEmail) {
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
        <div className="form-group form-check">
          <label htmlFor="rememberMeCheck" className="form-check-label">
            <input
              name="rememberMe"
              type="checkbox"
              className="form-check-input"
              id="rememberMeCheck"
              onChange={this.handleChange}
              value={rememberMe}
            />
            Remember Me
          </label>
        </div>
      ) : <span />;

    const registerInput = isRegister
      ? (
        <React.Fragment>
          <div className="form-group auth-group">
            <label htmlFor="confirmPasswordInput">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                id="confirmPasswordInput"
                onChange={this.handleChange}
                autoComplete="confirmPassword"
                placeholder="Confirm Password"
                aria-describedby="confirmPassword"
                className={`form-control ${validation.confirmPassword}`}
              />
              <div className="invalid-feedback">Passwords dont match</div>
            </label>
          </div>
          <div className="form-group auth-group">
            <label htmlFor="firstNameInput">
              First Name
              <input
                type="text"
                name="firstName"
                aria-describedby="firstName"
                id="firstNameInput"
                placeholder="First Name"
                value={firstName}
                onChange={this.handleChange}
                className={`form-control ${validation.firstName}`}
              />
              <div className="invalid-feedback">First name must be 2-40 character</div>
            </label>
          </div>
          <div className="form-group auth-group">
            <label htmlFor="lastNameInput">
              Last Name
              <input
                type="text"
                autoComplete="lastName"
                className={`form-control ${validation.lastName}`}
                name="lastName"
                aria-describedby="lastName"
                id="lastNameInput"
                placeholder="Last Name"
                value={lastName}
                onChange={this.handleChange}
              />
              <div className="invalid-feedback">Last name must be 2-40 character</div>

            </label>
          </div>
        </React.Fragment>
      ) : null;

    return (
      <div className="container-fluid h-100 position-absolute">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-xl-4">
            <img src="images/logo.png" alt="Vissne" height="70" className="mx-auto d-block" />
            <form onSubmit={this.handleSubmit} id="formReg">
              <div className="form-group auth-group">
                <label htmlFor="emailInput">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="emailInput"
                    autoComplete="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    className={`form-control ${validation.email}`}
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </label>
              </div>
              <div className="form-group auth-group">
                <label htmlFor="passwordInput">
                  Password
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="passwordInput"
                    placeholder="Password"
                    aria-describedby="password"
                    onChange={this.handleChange}
                    autoComplete="current-password"
                    className={`form-control ${validation.password}`}
                  />
                  <div className="invalid-feedback">Your password must be 6-16 character.</div>
                </label>
              </div>
              {registerInput}
              <div className="d-flex justify-content-between">
                {rememberMeCheckBox}
                <button
                  className="btn btn-link"
                  onClick={() => this.setState(prevState => ({ isRegister: !prevState.isRegister }))}
                  type="button"
                >
                  {switchRegisterToLoginText}
                </button>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block font-weight-bold"
                onClick={this.login}
              >
                {buttonText}
              </button>
            </form>
            {/* <div className="row mt-3">
              <div className="col">
                <button type="button" className="btn btn-primary btn-block google font-weight-bold">Google</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary btn-block twitter font-weight-bold">Twitter</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary btn-block facebook font-weight-bold">Facebook</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

// TODO: Add Facebook, google and twitter login options.
