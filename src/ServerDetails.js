import React, { Component } from 'react';

class ServerDetails extends Component {
  render() {

    const { server, applications } = this.props;
    return (
      <div>
        <h2>{server}</h2>
        <ul>
          {
            Object
              .keys(applications)
              .map(id => <li key={id}>{applications[id].package}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default ServerDetails;
