import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home.js";
import BarcodeScan from "./Components/BarcodeScan.js"
import "./App.css";

function App() {
  return (
    <div className="root">
      <Router>
        <p> </p>
        <center>This is our app, bitch</center>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/BarcodeScan" component={BarcodeScan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
