import React, { Component } from 'react';

class Server extends Component {
  render() {
    const { name } = this.props;

    return (
      <li className="server" onClick={() => this.props.loadServer(name)}>
        {name}
      </li>
    )
  }
}

export default Server;
