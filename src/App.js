import React, { Component } from 'react';
import logo from '../public/favicon.ico';
import './App.css';
import servers from './servers';
import { map } from 'lodash';

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

    console.log('servers:');
    map(this.state.servers, s => console.log(s))
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What's Deployed</h2>
        </div>
        <button onClick={(e) => this.loadServers(e)}>Load Servers</button>
      </div>
    );
  }
}

export default App;
