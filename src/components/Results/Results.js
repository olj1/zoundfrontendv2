import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import SearchAPI from "../../api/SearchAPI"


class Results extends Component {
  render() {
    console.log(this.props.search_results)
    return (
      <div>
        <BootstrapTable data={this.props.search_results}>
          <TableHeaderColumn isKey dataField='id'> User </TableHeaderColumn>
          <TableHeaderColumn dataField='query'> English Word </TableHeaderColumn>
          <TableHeaderColumn dataField='result'> Chinese Word </TableHeaderColumn>
          <TableHeaderColumn dataField='phonetic_relationship'> Phonetic Relationship </TableHeaderColumn>
          <TableHeaderColumn dataField='semantic_relationship'> Semantic Relationship </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Results