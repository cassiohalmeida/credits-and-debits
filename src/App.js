import React, { Component } from 'react';
import './App.css';
import AppContent from './components/AppContent'
import Title from './components/Title'
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
      <AppContent>
        <Wrapper>
          <Title/>
        </Wrapper>
      </AppContent>
    );
  }
}

export default App;
