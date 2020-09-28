import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router/router";
import Store from "./store/index";
import { Provider } from "mobx-react";
import './styles/index.scss';
import 'antd/dist/antd.css';
import './assets/fonts/font1/iconfont.css';
import './assets/fonts/font2/iconfont.css';
import './assets/fonts/font3/iconfont.css';


ReactDOM.render(
  <Provider {...Store}>
    <Router></Router>
  </Provider>,
  document.getElementById('root')
);
