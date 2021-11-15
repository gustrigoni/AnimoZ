import React from "react";

import { Home } from './../screens/Home';
import { Watch } from './../screens/Watch';
import { ErrorPage } from '../screens/ErrorPage';

import { elastic as Menu } from 'react-burger-menu';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <>
      <Menu noOverlay>
        <a id="home" className="menu-item" href="/"><i className="fas fa-hand-holding-water"></i>Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}