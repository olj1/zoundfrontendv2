import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { FormGroup, Button } from 'reactstrap'
import FormControl from 'react-bootstrap/FormControl'
import SearchAPI from "../../api/SearchAPI.js"
import "./search.css"

export default class Search extends Component {


  handleSearch = async (event) => {
    event.preventDefault()
    console.log(event.target.elements[0].value)
    let textToSearchFor = JSON.stringify(event.target.value)
    if (textToSearchFor !== '') {
      let response = await SearchAPI.fetchPinyinByID(textToSearchFor)
      this.props.search_results(response)
    }
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <form className="searchform" onSubmit={this.handleSearch}>
          <FormGroup >
            <div>
              <FormControl className="innerForm" type="text" placeholder="One english word..." />
              <Button type="submit">See how it sounds in Chinese</Button>

              <br />
              <div>
              </div>
            </div>
          </FormGroup>
        </form>
        <Link className='linkCenter' to={'/connections'} > View Connections </Link>
      </div>

    )
  }

}


