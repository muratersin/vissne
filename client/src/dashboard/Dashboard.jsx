import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Dashboard',
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
