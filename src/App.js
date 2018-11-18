import React, { Component } from 'react';
import './App.css';
import AppContent from './components/AppContent'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <AppContent>
        <Wrapper>
          <Title/>
        </Wrapper>
        <Wrapper>
          <Button 
            type='primary' 
            text='Add Debit' />
          <Button 
            type='secundary' 
            text='Add Credit' />
        </Wrapper>
      </AppContent>
    );
  }
}

export default App;
