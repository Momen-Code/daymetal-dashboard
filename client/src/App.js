import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Login, Orders, Products } from "./routes";
import { NavBar } from "./components";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <NavBar />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
