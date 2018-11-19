import React, { Component } from 'react'
import { Table, Tr, } from 'styled-table-component';

class Transactions extends Component {
  render() {
    const { transactions } = this.props
    if (transactions.length === 0) {
      return (<p>You do not have any transaction. Please add one.</p>)
    }
    return (
      <Table hover>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Value</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {this.props.transactions.map((transaction) => (
            <Tr textAlign='center' key={transaction.id}>
              <th scope="row">{transaction.type.toUpperCase()}</th>
              <td>R${Number(transaction.value).toLocaleString('pt-BR')}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString('pt-BR')}</td>
            </Tr>
          ))}
          
        </tbody>
      </Table>
    )
  }
}

export default Transactions
