import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Accommodations from "./components/Accommodations/Accommodations";
import Page404 from "./components/Error/Page404";
import AccommodationsDetail from "./components/AccomodationsDetail/AccommodationsDetail";

const browserHistory = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
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
