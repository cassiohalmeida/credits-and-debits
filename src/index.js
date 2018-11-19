import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appState from './redux/reducer'
import App from './App';

const store = createStore(appState)
store.subscribe(() => {
  console.log(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
