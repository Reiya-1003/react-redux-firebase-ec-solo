import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'　　//redux導入
import { Provider } from 'react-redux'　//redux導入
import store from "./Store/index";

import './index.css';
import App from './App';
import Home from './Component/Home'
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
)