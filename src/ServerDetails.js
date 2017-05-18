import React, { Component } from 'react';

class ServerDetails extends Component {
  render() {

    const { server } = this.props;
    return (
      <div>{server.name}</div>
    )
  }
}

export default ServerDetails;
