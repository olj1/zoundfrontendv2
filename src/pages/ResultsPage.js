import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Results from "../components/Results/Results.js"

import ConnectionsAPI from '../api/ConnectionsAPI.js'
import Search from '../components/Search/Search.js'


class ResultsPage extends Component {
  state = {
    all_search_results: null,
  }

  render() {
    
    return (
      <div >
        <div >
        </div>
        <div >
        <Results search_results={this.state.search} />
        </div>
        <div >
        </div>
      </div>
    )
  }
}

export default ResultsPage