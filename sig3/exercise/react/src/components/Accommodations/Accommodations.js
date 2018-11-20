import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AccommodationCard from "../AccomodationCard/AccommodationCard";

import { fetch } from "../../common/fetch";

const styles = {
  cardGrid: {
    padding: 8,
  },
};

class Accommodations extends React.Component {
  state = { accommodations: undefined };

  componentDidMount() {
    fetch("accommodations").then(result => this.setState({ accommodations: result }));
  }

  render() {
    if (!this.state.accommodations) return null;

    return (
      <div className={this.props.classes.root}>
        <main>
          <Grid container spacing={24} className={this.props.classes.cardGrid}>
            {this.state.accommodations &&
              this.state.accommodations.map((accommodation, index) => (
                <AccommodationCard accommodation={accommodation} key={index} />
              ))}
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Accommodations);
