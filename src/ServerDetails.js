import React, { Component } from 'react';
import './App.css';
import { map } from 'lodash';

class ServerDetails extends Component {
  render() {
    const { name, servers } = this.props;
    if(name === '') return (<div></div>)
    const applications = servers[name].applications;
    const appIds = map(Object.keys(applications), (a) => {
      var re = /\*/gi;
      return a.replace(re, ".");
    });
    return (
      <div className='server-details'>
        <h2>
          {name}
        </h2>
        <ul>
          {
            appIds.map(id => (<li key={id}>{id}</li>))
          }
        </ul>
      </div>
    )
  }
}

export default ServerDetails;
