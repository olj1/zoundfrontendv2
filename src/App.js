import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import ConnectionsPage from './pages/ConnectionsPage.js'
import ResultsPage from './pages/ResultsPage.js'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/connections" component={ConnectionsPage} />
            <Route exact path="/results" component={ResultsPage} />
            <Route exact path="/results/:wordID" component={ResultsPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
