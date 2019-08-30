import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Auth from "./auth/Auth";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Callback from "./components/Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <div>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            exact
            path="/"
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
