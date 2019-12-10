import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ConnectionsAPI from '../api/ConnectionsAPI.js'
import Search from '../components/Search/Search.js'
import Results from "../components/Results/Results.js"

class HomePage extends Component {
  state = {
    connections: null,
    search_results: null,
  }

  set_new_state = (input) => {
    this.setState({ search_results: input })
  }
  render() {

      return(
      <div >
    <div className='hpTitle' >
      <h1 > Enter a single English Word </h1>
    </div>
    <div >
      <Search search_results={this.set_new_state} />
      <Results search_results={this.state.search_results} />
    </div>
    <div >
    </div>
      </div >
    )
  }
}

export default HomePage