import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Login',
      form: {
        email: '',
        password: '',
        rememberMe: false,
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" value={this.state.form.email} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
          <input className="input" type="password" placeholder="password" value/>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
