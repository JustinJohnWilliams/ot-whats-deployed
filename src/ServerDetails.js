import React, { Component } from 'react';

class ServerDetails extends Component {
  render() {

    const { server, details } = this.props;
    return (
      <div>
        <h2>{server.name}</h2>
        <ul>
          {
            Object
              .keys(details)
              .map(id => <li key={id}>{details[id].package}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default ServerDetails;
