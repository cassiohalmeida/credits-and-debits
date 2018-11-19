import React, { Component } from 'react'
import styled from 'styled-components'

class Transactions extends Component {
  render() {
    const { transactions } = this.props
    let component;
    if (transactions.length === 0) {
      component = <p>You do not have any transaction.</p>
    } else {
      component = <ul>
        {this.props.transactions.map((transaction) => (
          <li key={transaction.id}>Transactions: {transaction.type}</li>
        ))}
        
      </ul>
    }
    return (
      <div>
        {component}
      </div>
    )
  }
}

export default Transactions
