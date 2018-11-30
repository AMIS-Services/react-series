import * as React from "react";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";

class AccommodationDetail extends React.Component {
  state = { accommodation: undefined };

  render() {
    if (!this.state.accommodation) return null;

    return <div>{this.state.accommodation.name}</div>;
  }
}

export default withRouter(AccommodationDetail);
