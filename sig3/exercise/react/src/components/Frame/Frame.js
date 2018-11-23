import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Accommodations from "../Accommodations/Accommodations";
import Page404 from "../Error/Page404";
import AccommodationsDetail from "../AccommodationsDetail/AccommodationsDetail";

class Frame extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Appbar title="AMISBnB" />
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Accommodations} />
            <Route path="/accommodation/:id" component={AccommodationsDetail} />
            <Route component={Page404} />
          </Switch>
        </React.Fragment>
      </>
    );
  }
}

export default Frame;
