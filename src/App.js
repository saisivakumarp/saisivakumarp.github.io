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
                path="/saisivakumarp/saisivakumar.github.io/"
                component={Home}
                exact
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/home"
                component={Home}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/courses"
                component={Courses}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/philosophy"
                component={Philosophy}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/interests"
                component={Interests}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/publications"
                component={Publications}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/people"
                component={People}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/activities"
                component={Activities}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/grants"
                component={Grants}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/awards"
                component={Awards}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/service"
                component={Service}
              />
              <Route
                path="/saisivakumarp/saisivakumar.github.io/gallery"
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
