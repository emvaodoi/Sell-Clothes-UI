import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from "./Index";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
import Map from "./Map/Map";
import Profile from "./Profile/Profile";
import Tables from "./Tables/Tables";
import Factory from "./Factory/Factory";
function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/map" exact>
            <Map />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/table" exact>
            <Tables />
          </Route>
          <Route path="/factory" exact>
            <Factory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
