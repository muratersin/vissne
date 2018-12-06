import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Login',
    };
  }

  render() {
    return (
      <h1>
        {this.state.message}
      </h1>
    );
  }
}
