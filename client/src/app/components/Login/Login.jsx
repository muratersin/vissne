import React, { Component } from 'react';

import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  login() {
    const { toggleAlert } = this.props;
    toggleAlert({
      message: 'Not alloved',
      kind: 'danger',
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="container-fluid h-100 position-absolute">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-xs-12 col-sm-8 col-md-6 col-xl-4">
            <img src="images/logo.png" alt="Vissne" height="70" className="mx-auto d-block" />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="emailInput">
                  Email
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailDesc"
                    id="emailInput"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.hangleChange}
                  />
                </label>
                <small id="emailDesc">We never send email for anything.</small>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">
                  Password
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    aria-describedby="password"
                    id="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={this.hangleChange}
                  />
                </label>
              </div>
              <div className="form-group form-check">
                <label htmlFor="rememberMeCheck" className="form-check-label">
                  <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                  Remember Me
                </label>
              </div>
              <button type="button" className="btn btn-primary btn-block font-weight-bold" onClick={this.login}>Login</button>
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
