import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chart from "./Chart/Chart";
import Factory from "./Factory/Factory";
import Index from "./Dashboard/Index";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
import Map from "./Map/Map";
import Note from "./Note/Note";
import Order from "./Order/Order";
import Product from "./Product/Product";
import Profile from "./Profile/Profile";
import Tables from "./Tables/Tables";
import Ticket from "./Ticket/Ticket";
import User from "./User/User";
import Sale from "./Sale/Sale";

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
          <Route path="/ticket" exact>
            <Ticket />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/note" exact>
            <Note />
          </Route>
          <Route path="/chart" exact>
            <Chart />
          </Route>
          <Route path="/sale" exact>
            <Sale />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
