import React, { Component } from 'react';
import './App.css';
import AppContent from './components/AppContent'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Button from './components/Button'
import Input from './components/Input'
import Transactions from './components/Transactions'
import { connect } from 'react-redux'
import { addTransaction, incrementAmount, decrementAmount } from './redux/actions'
import Amount from './components/Amount'

class App extends Component {
  render() {
    return (
      <AppContent>
        <Wrapper>
          <Title>
            Credits and Debits
          </Title>
        </Wrapper>
        <form onSubmit={this.props.addTransaction}>
          <Wrapper>
            <Input required={true} name='transaction' placeholder='Insert the new value' type='number'/>
          </Wrapper>
          <Wrapper>
            <label>Credit</label>
            <Input required={true} name='transaction_type' type='radio' defaultValue='credit'/>
            <label>Debit</label>
            <Input required={true} name='transaction_type' type='radio' defaultValue='debit'/>
          </Wrapper>
          <Wrapper>
            <Button
              primary
              type='submit'
              onClick={this.handleClick}>
              Add transaction
            </Button>
          </Wrapper>
        </form>
        <Wrapper>
          <Transactions transactions={this.props.state.transactions}/>
        </Wrapper>
        <Wrapper>
          <Amount/>
        </Wrapper>
      </AppContent>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (e) => {
    e.preventDefault()
    const transactionType = e.target.transaction_type.value;
    const transactionValue = e.target.transaction.value;
    dispatch(addTransaction(transactionValue, transactionType))
    if (transactionType === 'credit') {
      dispatch(incrementAmount(Number(e.target.transaction.value)))
    } else {
      dispatch(decrementAmount(Number(e.target.transaction.value)))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
