import * as React from "react";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";

class AccommodationsDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      accommodation: null,
    };
  }

  componentDidMount() {
    const relativePath = this.props.match.url;
    const path = relativePath.slice(1);
    fetch(`accommodations/${path}`).then(result => this.setState({ accommodation: result }));
  }

  render() {
    return <div className="root">{this.state.accommodation && this.state.accommodation.name}</div>;
  }
}

export default withRouter(AccommodationsDetail);
