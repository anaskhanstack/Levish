import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Navbar} />
      </Switch>
    </Router>
  );
}

export default App;
