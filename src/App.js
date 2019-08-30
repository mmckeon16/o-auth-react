import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Auth from "./auth/Auth";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="body">
          <Route
            exact
            path="/"
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
