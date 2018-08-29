import * as React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";

const styles = {};

class AccommodationsDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      accommodation: null,
    };
  }

  componentDidMount() {
    const path = this.props.match.params.id;
    fetch(`accommodations/${path}`).then(result => this.setState({ accommodation: result }));
  }

  render() {
    return <div className="root">{this.state.accommodation && this.state.accommodation.name}</div>;
  }
}

export default withStyles(styles)(withRouter(AccommodationsDetail));
