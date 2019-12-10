import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'


import ConnectionsList from '../components/ConnectionsList/ConnectionsList.js'
import ConnectionsAPI from '../api/ConnectionsAPI.js'

class ConnectionsPage extends Component {
  state = {
    connections: null,
  }

  async componentDidMount() {
    let jsonResponse = await ConnectionsAPI.fetchConnections()
    return this.setState({
      connections: jsonResponse,
    })
  }

  render() {
    return (
      <div>
        <ConnectionsList connections={this.state.connections} />
      </div>
    );
  }
}


export default ConnectionsPage;