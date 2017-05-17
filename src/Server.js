import React, { Component } from 'react';

class Server extends Component {
  constructor() {
    super();
  }

  render() {
    const { details, index } = this.props;

    return (
      <li className="server">
        {details.name}
      </li>
    )
  }
}

export default Server;
