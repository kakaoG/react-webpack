import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Index from '../views/Index';
import User from '../views/User';
import Count from '../views/Count';

const BasicRoute =() => (
  <BrowserRouter>
    <Switch>
      <Route exact component={Index} path="/"/>
      <Route exact component={User} path="/user"/>
      <Route exact component={Count} path="/count"/>
    </Switch>
  </BrowserRouter>
);


export default hot(module)(BasicRoute);