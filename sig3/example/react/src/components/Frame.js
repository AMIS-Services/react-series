import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Accommodations from "./Accommodations/Accommodations";
import AccommodationsDetail from "./AccomodationsDetail/AccommodationsDetail";
import CreateAccommodation from "./Accommodations/CreateAccommodation";
import Page404 from "./Error/Page404";
import Appbar from "./Appbar/Appbar";

class Frame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Appbar title="AmisBnB" />
        <Switch>
          <Route exact path="/" component={Accommodations} />
          <Route path="/accommodation/:id" component={AccommodationsDetail} />
          <Route path="/create" component={CreateAccommodation} />
          <Route path="/*" component={Page404} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Frame;
