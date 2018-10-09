import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Accommodations from "./components/Accommodations/Accommodations";

import "./App.css";
import AccommodationDetail from "./components/AccommodationDetail/AccommodationDetail";
import Page404 from "./components/Error/Page404";

class App extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <Switch>
          <Route exact path="/" component={Accommodations} />
          <Route path="/accommodation/:id" component={AccommodationDetail} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
