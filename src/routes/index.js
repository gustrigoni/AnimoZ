import React from "react";

import Home from './screens/Home';
import Watch from './screens/Watch';
import Error404 from './screens/Error404';
import { elastic as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Routes extends React.Component {
 
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <>
        <Menu noOverlay>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
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