import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import Server from './Server';
import ServerDetails from './ServerDetails';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.loadServer = this.loadServer.bind(this);

    this.state = {
      servers: {},
      currentServer: ''
    };
  }

  componentWillMount() {
    this.ref = base.bindToState('servers', {
      context: this,
      state: 'servers'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadServer = (name) => {
    this.setState({currentServer: name});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What's Deployed</h2>
        </div>
        <div className="whats-deployed">
          <ul>
            {
                Object
                  .keys(this.state.servers)
                  .map(id => <Server key={id} name={id} loadServer={this.loadServer} />)
            }
          </ul>
          <ServerDetails name={this.state.currentServer} servers={this.state.servers} />
        </div>
      </div>
    );
  }
}

export default App;
