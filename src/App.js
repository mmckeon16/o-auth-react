import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="body">
      <Router>
        <Nav />
        <Main />
      </Router>
    </div>
  );
};

export default App;
