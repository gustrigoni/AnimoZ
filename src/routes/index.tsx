import React from "react";

import { Home } from './../screens/Home';
import { Watch } from './../screens/Watch';
import { ErrorPage } from '../screens/ErrorPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/watch">
            <Watch />
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