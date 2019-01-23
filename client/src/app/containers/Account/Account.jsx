import React, { Component } from 'react';

import Menu from '../../components/Menu';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-2">
          <Menu />
        </div>
        <div className="col">
          mmeasd
        </div>
      </div>
    );
  }
}
