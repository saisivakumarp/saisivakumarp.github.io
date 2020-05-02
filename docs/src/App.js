import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../src/Home";
import Courses from "./Courses";
import Philosophy from "./Philosophy";
import Activities from "./Activities";
import Awards from "./Awards";
import Grants from "./Grants";
import Gallery from "./Gallery";
import Service from "./Service";

import Interests from "./Interests";
import People from "./People";
import Publications from "./Publications";

export const App = () => {
  return (
    <Router>
      <div>
        <div id="parent-div">
          <div className="main-container">
            <Navigation></Navigation>
            <Switch>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                component={Home}
                exact
              />
              <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
              <Route
                path={process.env.PUBLIC_URL + "/courses"}
                component={Courses}
              />
              <Route
                path={process.env.PUBLIC_URL + "/philosophy"}
                component={Philosophy}
              />
              <Route
                path={process.env.PUBLIC_URL + "/interests"}
                component={Interests}
              />
              <Route
                path={process.env.PUBLIC_URL + "/publications"}
                component={Publications}
              />
              <Route
                path={process.env.PUBLIC_URL + "/people"}
                component={People}
              />
              <Route
                path={process.env.PUBLIC_URL + "/activities"}
                component={Activities}
              />
              <Route
                path={process.env.PUBLIC_URL + "/grants"}
                component={Grants}
              />
              <Route
                path={process.env.PUBLIC_URL + "/awards"}
                component={Awards}
              />
              <Route
                path={process.env.PUBLIC_URL + "/service"}
                component={Service}
              />
              <Route
                path={process.env.PUBLIC_URL + "/gallery"}
                component={Gallery}
              />
            </Switch>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
