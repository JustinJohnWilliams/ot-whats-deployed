import React, { Component } from 'react';
import './styles/App.css'

class ServerDetails extends Component {
  render() {
    const { name, servers } = this.props;
    if(name === '') return (<div></div>)
    const applications = servers[name];
    return (
      <div className='server-details'>
        <h2>
          {name}
        </h2>
        <ul>
          {
            Object
              .keys(applications)
              .map(id =>
                <li key={id}>
                  {
                    id.replace('-', '.') + '-' + applications[id].branch + '-' + applications[id].version
                  }
                </li>)
          }
        </ul>
      </div>
    )
  }
}

export default ServerDetails;
