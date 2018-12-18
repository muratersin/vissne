import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Dashboard',
    };
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message}
        </h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
