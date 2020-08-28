import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Index from "./pages/Admin_Pages/Index";
import Signin from "./pages/Admin_Pages/Login/Signin";
import Signup from "./pages/Admin_Pages/Login/Signup";
import Map from "./pages/Admin_Pages/Map/Map";
import Profile from "./pages/Admin_Pages/Profile/Profile";
import Tables from "./pages/Admin_Pages/Tables/Tables";
function App() {
  return (
    <div className="app">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
