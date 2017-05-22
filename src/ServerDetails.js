import React, { Component } from 'react';

class ServerDetails extends Component {
  render() {
    const { name, servers } = this.props;
    if(name === '') return (<div></div>)
    const applications = servers[name].applications;
    return (
      <div>
        <h2>
          {name}
        </h2>
        <ul>
          {
            Object
              .keys(applications)
              .map(id => <li className='' key={id}>{applications[id].package}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default ServerDetails;
