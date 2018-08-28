import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import PropTypes from 'prop-types';
import Appbar from "../Appbar/Appbar";
import AccommodationCard from "../AccomodationCard/AccommodationCard";

import { fetch } from "../../common/fetch";

const styles = {
  cardGrid: {
    padding: 8,
  },
};

class Accommodations extends React.Component {
  static propTypes = {};

  constructor() {
    super();

    this.state = {
      accommodations: null,
    };
  }

  componentDidMount() {
    fetch("accommodations").then(result => this.setState({ accommodations: result }));
  }

  renderAccommodation = (accommodation, index) => <AccommodationCard accommodation={accommodation} key={index} />;

  render() {
    return (
      <div className="root">
        <Appbar title="AmisBnB" />
        <main>
          <Grid container spacing={24} className={this.props.classes.cardGrid}>
            {this.state.accommodations && this.state.accommodations.map(this.renderAccommodation)}
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Accommodations);
