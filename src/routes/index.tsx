import React from "react";

import { Home } from './../screens/Home';
import Watch from './../screens/Watch';
import Error404 from './../screens/Error404';
import { elastic as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Routes extends React.Component {

  render() {
    return (
      <>
        <Menu noOverlay>
          <a id="home" className="menu-item" href="/"><i className="fas fa-hand-holding-water"></i>Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <Router>
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
              <Error404 />
            </Route>
          </Switch>
        </Router>
      </>
    );
  };
}