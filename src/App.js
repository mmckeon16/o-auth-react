import React, { Component } from "react";
import Nav from "./components/Nav";
import Auth from "./auth/Auth";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Public from "./components/Public";
import Private from "./components/Private";
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
          <Route
            path="/profile"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/about" component={About} />
          <Route path="/public" component={Public} />
          <Route
            path="/private"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Private auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
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
