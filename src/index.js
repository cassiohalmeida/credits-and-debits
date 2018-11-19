import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appState from './redux/reducer'
import { saveState } from './redux/localStorage'
import App from './App';

const store = createStore(appState)
store.subscribe(() => {
  saveState(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
