import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import rootReducers from './Reducers/rootReducers'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);
serviceWorker.unregister();
