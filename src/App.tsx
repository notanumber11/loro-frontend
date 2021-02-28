import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import OnBoarding from "./onepirate/OnBoarding";
import SignUp from "./onepirate/SignUp";
import ForgotPassword from "./onepirate/ForgotPassword";
import Terms from "./onepirate/Terms";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/loroOnBoarding">
            <OnBoarding />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/contact">
            <Terms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/how-it-works">
            <OnBoarding />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
