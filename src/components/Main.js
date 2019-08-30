import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import Auth from "../auth/Auth";

class Main extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route path="/profile" compeonent={Profile} />
        <Route path="/about" compeonent={About} />
      </div>
    );
  }
}

export default Main;
