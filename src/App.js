import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import servers from './servers';
import { filter, sortBy, find } from 'lodash';
import Server from './Server';
import ServerDetails from './ServerDetails';

class App extends Component {
  constructor() {
    super();

    this.loadServer = this.loadServer.bind(this);

    this.state = {
      servers: {},
      activeServer: {}
    };
  }

  componentDidMount() {
    this.loadServers();
  }

  loadServers = () => {
    this.setState({
      servers:
        sortBy(
          filter(servers, (s) => s.name.toLowerCase().startsWith('corp'))
        , ['sort_priority', 'name'])
    });
  };

  loadServer = (id) => {
    const currentActiveServer = {...this.state.activeServer};
    const servers = {...this.state.servers};
    const activeServer = find(servers, ['id', id]) || currentActiveServer;
    this.setState({ activeServer });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What's Deployed</h2>
        </div>
        <div className="whats-deployed">
          <ul className="list-of-servers">
            {
                Object
                  .keys(this.state.servers)
                  .map(id => <Server key={id} details={this.state.servers[id]} loadServer={this.loadServer} />)
            }
          </ul>
          <div>
            <ServerDetails server={this.state.activeServer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
