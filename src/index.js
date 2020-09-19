import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router/router";
import Store from "./store/index";
import { Provider } from "mobx-react";
import 'antd/dist/antd.css';
import './styles/index.scss';

ReactDOM.render(
  <Provider {...Store}>
    <Router></Router>
  </Provider>,
  document.getElementById('root')
);
