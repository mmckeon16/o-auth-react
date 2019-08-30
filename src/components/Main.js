import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default Main;
