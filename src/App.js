import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import { filter, sortBy, find } from 'lodash';
import Server from './Server';
import ServerDetails from './ServerDetails';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.loadServer = this.loadServer.bind(this);

    this.state = {
      servers: {},
      activeServer: {},
      serverDetails: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState('servers', {
      context: this,
      state: 'servers'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
      const newServers = {...nextState.servers};
      this.setState({
        servers:
          sortBy(
            filter(newServers, (s) => s.name.toLowerCase().startsWith('corp'))
          , ['sort_priority', 'name'])
      });
  }

  loadServer = (id) => {
    const currentActiveServer = {...this.state.activeServer};
    const servers = {...this.state.servers};
    const activeServer = find(servers, ['id', id]) || currentActiveServer;
    this.setState({ activeServer });

    base.fetch(id.toString(),
      {
        context: this,
        asArray: true,
        then(data) {
          console.log(data);
          this.setState({serverDetails: data});
      }
    });
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
            <ServerDetails server={this.state.activeServer} details={this.state.serverDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
