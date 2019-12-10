import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class ConnectionsList extends Component {
  render() {
    console.log(this.props.connections)
    return (
      <div>
        <BootstrapTable data={this.props.connections}>
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

export default ConnectionsList