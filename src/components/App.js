import React, { Component, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";
import Invalid from "./Invalid";
import LocationDisplayComponent from "./LocationDisplayComponent";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Link to="/"> Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/" component={Invalid} />
          </Switch>
          <LocationDisplayComponent />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
