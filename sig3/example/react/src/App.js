import React, { Component } from "react";
import { Switch, Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Frame from "./components/Frame";

const browserHistory = createHistory();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={browserHistory}>
          <Switch>
            <Route component={Frame} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
