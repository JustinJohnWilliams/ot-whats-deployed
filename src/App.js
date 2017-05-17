import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import servers from './servers';
import { map } from 'lodash';
import Server from './Server';

class App extends Component {
  constructor() {
    super();

    this.loadServers = this.loadServers.bind(this);

    this.state = {
      servers: {},
      applications: {}
    };
  }

  loadServers = (e) => {
    e.preventDefault();

    this.setState({
      servers: servers
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What's Deployed</h2>
        </div>
        <button onClick={(e) => this.loadServers(e)}>Load Servers</button>
        <div className="whats-deployed">
          <ul className="list-of-servers">
            {
                Object
                  .keys(this.state.servers)
                  .map(id => <Server key={id} index={id} details={this.state.servers[id]} />)
            }
          </ul>
          <div>
            <h1>
              Some Server
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
