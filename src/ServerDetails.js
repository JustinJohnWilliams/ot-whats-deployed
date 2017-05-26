import React, { Component } from 'react';
import './styles/App.css'

class ServerDetails extends Component {
  render() {
    const { name, applications } = this.props;
    if(name === '') return (<div></div>)
    return (
      <div className='server-card'>
        <h2>{name}</h2>
        <div>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Branch</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
              {
                Object
                  .keys(applications)
                  .map(id =>
                    <tr key={id}>
                      <td>{id.replace('-', '.')}</td>
                      <td>{applications[id].branch}</td>
                      <td>{applications[id].version}</td>
                    </tr>)
              }
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default ServerDetails;
