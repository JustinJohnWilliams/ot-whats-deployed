import React, { Component } from 'react';

class Server extends Component {
  render() {
    const { details } = this.props;

    return (
      <li className="server" onClick={() => this.props.loadServer(details.id)}>
        {details.name}
      </li>
    )
  }
}

export default Server;
