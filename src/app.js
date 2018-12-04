import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Router from './route/index';
import store from './redux/store';

ReactDom.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector("#app"));