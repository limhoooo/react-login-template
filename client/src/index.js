import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import reduxThunk from 'redux-thunk'
import reducer from './_reducers/index'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
);
