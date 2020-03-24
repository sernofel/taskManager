import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import './styles/main.scss'
import { createStore } from 'redux';
import taskApp from './store/tasks/tasks.reducer';
import { Provider } from "react-redux";

let store = createStore(taskApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some  pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
