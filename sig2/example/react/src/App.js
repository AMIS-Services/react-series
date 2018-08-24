import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";

import Accommodations from "./components/Accommodations/Accommodations";
import Page404 from "./components/Error/Page404";
import AccommodationsDetail from "./components/AccomodationsDetail/AccommodationsDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Accommodations} />
          <Route path="/:id" exact component={AccommodationsDetail} />
          <Route path="*" exact component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
