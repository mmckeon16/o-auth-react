import React, { Component } from "react";
import Nav from "./components/Nav";
import Auth from "./auth/Auth";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Public from "./components/Public";
import Private from "./components/Private";
import Course from "./components/Course";
import About from "./components/About";
import Callback from "./components/Callback";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false
    };
  }

  componentDidMount() {
    this.state.auth.renewToken(() =>
      this.setState({ tokenRenewalComplete: true })
    );
  }

  render() {
    const { auth } = this.state;
    // Show loading message until the token renewal check is completed.
    if (!this.state.tokenRenewalComplete) return "Loading...";
    return (
      <div>
        <Nav auth={auth} />
        <div className="body">
          <Route
            exact
            path="/"
            render={props => <Home auth={auth} {...props} />}
          />
          <PrivateRoute path="/profile" component={Profile} auth={auth} />
          <Route path="/about" component={About} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} auth={auth} />

          <PrivateRoute
            path="/course"
            scopes={["read:courses"]}
            component={Course}
            auth={auth}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={auth} {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
