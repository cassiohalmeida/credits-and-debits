import React, { Component } from 'react';
import './App.css';
import AppContent from './components/AppContent'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Button from './components/Button'
import Modal from './components/Modal'
import { connect } from 'react-redux'
import addCounter from './redux/actions'

class App extends Component {
  render() {
    return (
      <AppContent>
        <Modal/>
        <Wrapper>
          <Title/>
        </Wrapper>
        <Wrapper>
          <Button 
            type='primary'
            >
            Add Debit
          </Button>
          <Button 
            type='secundary' 
            text='Add Credit'
            >
            Add Credit
          </Button>
        </Wrapper>
      </AppContent>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  addCredit: () => dispatch(addCounter(5))
}

export default connect(mapDispatchToProps)(App);
