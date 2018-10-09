import * as React from "react";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";

class AccommodationDetail extends React.Component {
  state = { accommodation: undefined };

  componentDidMount() {
    fetch("accommodations/" + this.props.match.params.id).then(accommodation => this.setState({ accommodation }));
  }

  render() {
    if (!this.state.accommodation) return null;

    return <div>{this.state.accommodation.name}</div>;
  }
}

export default withRouter(AccommodationDetail);
