import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Alert from '../containers/Alert/Alert';
import xhr from '../../lib/xhr';
import './Auth.scss';

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      form: {},
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
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { form } = this.state;
    form[name] = value;
    this.setState({ form });
  }

  validation() {
    const emailInput = document.querySelector('input[name="email"]');
    const { validation } = this.state;
    const { form, isRegister } = this.state;
    let isValid = true;

    if (!form.email || !emailInput.checkValidity()) {
      validation.email = {
        class: 'is-invalid',
        error: <div className="invalid-feedback">Please enter a valid email address.</div>,
      };
      isValid = false;
    }

    if (!form.password || form.password.length < 6 || form.password.length > 16) {
      validation.password = {
        class: 'is-invalid',
        error: <div className="invalid-feedback">Passwords must be 6-16 chacracter.</div>,
      };
      isValid = false;
    }

    if (isRegister) {
      if (!form.firstName || form.firstName.length < 2 || form.firstName.length > 40) {
        validation.firstName = {
          class: 'is-invalid',
          error: <div className="invalid-feedback">First name must be 2-40 character</div>,
        };
        isValid = false;
      }

      if (!form.lastName || form.lastName.length < 2 || form.lastName.length > 40) {
        validation.lastName = {
          class: 'is-invalid',
          error: <div className="invalid-feedback">Last name must be 2-40 character</div>,
        };
        isValid = false;
      }

      if (form.confirmPassword !== form.password) {
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
    const { form, isRegister } = this.state;
    const isValid = this.validation(form);
    const url = isRegister
      ? 'register'
      : 'login';

    if (!isValid) {
      return null;
    }

    const ops = {
      url,
      method: 'POST',
      data: form,
    };

    return xhr(ops)
      .then(() => {
        window.location.href = '/';
      })
      .catch(({ message }) => {
        this.setState({
          showAlert: true,
          errorMessage: message,
        });
      });
  }

  toggleAlert() {
    this.setState(prevState => ({
      showAlert: !prevState.showAlert,
    }));
  }

  switchForm() {
    this.setState(prevState => ({
      isRegister: !prevState.isRegister,
    }));
  }

  render() {
    const {
      form,
      isRegister,
      validation,
      loading,
      showAlert,
      errorMessage,
    } = this.state;

    let buttonText = 'LOGIN';
    let switchRegisterToLoginText = 'REGISTER';
    let registerInput = null;

    if (isRegister) {
      buttonText = 'REGISTER';
      switchRegisterToLoginText = 'LOGIN';

      registerInput = (
        <Fragment>
          <div className="form-group">
            <label htmlFor="confirmPasswordInput">Confirm Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0" id="confirmPasswordAddon">
                  <FontAwesomeIcon icon="key" />
                </span>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                id="confirmPasswordInput"
                onChange={this.handleChange}
                autoComplete="confirmPassword"
                placeholder="Confirm Password"
                aria-describedby="confirmPasswordAddon"
                className={`form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ${validation.confirmPassword.class || ''}`}
              />
              {validation.confirmPassword.error}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstNameInput">First Name</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0" id="firstName">
                  <FontAwesomeIcon icon="signature" />
                </span>
              </div>
              <input
                type="text"
                name="firstName"
                aria-describedby="firstName"
                id="firstNameInput"
                placeholder="First Name"
                value={form.firstName}
                onChange={this.handleChange}
                className={`form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ${validation.firstName.class || ''}`}
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
                <span className="input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0" id="lastName">
                  <FontAwesomeIcon icon="signature" />
                </span>
              </div>
              <input
                type="text"
                autoComplete="lastName"
                className={`form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ${validation.lastName.class || ''}`}
                name="lastName"
                aria-describedby="lastName"
                id="lastNameInput"
                placeholder="Last Name"
                value={form.lastName}
                onChange={this.handleChange}
              />
              {validation.lastName.error}
            </div>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div className="row justify-content-center">
          <img src={`${vissne.cdn}/images/logo.png`} alt="Vissne" height="70" className="my-2" />
        </div>
        <form onSubmit={this.handleSubmit} id="formReg" className="col-12 p-0">
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0" id="basic-addon1">
                  <FontAwesomeIcon icon="envelope" />
                </span>
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                id="emailInput"
                autoComplete="email"
                aria-describedby="emailInputGroup"
                placeholder="Enter email"
                onChange={this.handleChange}
                className={`form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ${validation.email.class || ''}`}
              />
              {validation.email.error}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0" id="passwordAddon">
                  <FontAwesomeIcon icon="unlock" />
                </span>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                id="passwordInput"
                placeholder="Password"
                aria-describedby="passwordAddon"
                onChange={this.handleChange}
                autoComplete="current-password"
                className={`form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ${validation.password.class || ''}`}
              />
              {validation.password.error}
            </div>
          </div>

          {registerInput}

          <div className="row">
            <div className="col-12 text-right">
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
            disabled={loading}
          >
            <span
              className={`spinner-grow spinner-grow-sm ${loading ? '' : 'd-none'}`}
              role="status"
              aria-hidden="true"
            />
            {buttonText}
          </button>
        </form>
        <a
          className="btn btn-default btn-block btn-dark border-0 social-button google  mt-2"
          href="auth/google"
        >
          <i className="social-button-icon">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </i>
          LOGIN WITH GOOGLE
        </a>
        <a
          className="btn btn-block btn-dark border-0 social-button facebook mt-2"
          href="auth/facebook"
        >
          <i className="social-button-icon">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </i>
          LOGIN WITH FACEBOOK
        </a>
        <Alert
          show={showAlert}
          message={errorMessage}
          kind="danger"
          toggleAlert={this.toggleAlert}
        />
      </Fragment>
    );
  }
}
