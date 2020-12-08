import React, { Component, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";
import Invalid from "./Invalid";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Link to="/"> Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/:invalid" component={Invalid} />
          </Switch>
          <LocationDisplay />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
