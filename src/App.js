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
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);

    this.state = {
      servers: {},
      currentServer: '',
      uid: null
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

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    })

  }

  loadServer = (name) => {
    this.setState({currentServer: name});
  }

  authHandler(err, authData) {
    if(err) {
      console.error(err);
      return;
    }

    this.setState({ uid: authData.user.uid });
  }

  authenticate() {
    base.authWithOAuthPopup('github', this.authHandler);
  }

  renderLogin() {
    return (
      <div>
        <h2>Must Login!!</h2>
        <button onClick={() => this.authenticate()}>click here to login!</button>
      </div>
    )
  }

  render() {
    if(!this.state.uid) { return this.renderLogin();}
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
