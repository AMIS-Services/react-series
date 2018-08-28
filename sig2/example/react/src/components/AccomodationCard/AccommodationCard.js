import * as React from "react";
import { Card, Grid, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { HouseIcon } from "../../resources/HouseIcon";

const styles = {
  root: {
    height: "100%",
    padding: 8,
    display: "flex",
    flexDirection: "column",
    margin: 20,
    "& main": {
      width: "100%" - 24,
    },
    "& h2": {
      margin: 8,
    },
    "& p": {
      fontSize: 16,
    },
    "& footer": {
      marginTop: "auto",
      alignSelf: "flex-end",
    },
  },
  thumbnail: {
    width: "100%",
  },
  subHeader: {
    color: "grey",
    fontSize: 14,
  },
  houseIcon: {
    cursor: "pointer",
    fill: "lightgray",
  },
  houseIconFavorite: {
    cursor: "pointer",
    fill: "red",
  },
};

class AccommodationCard extends React.Component {
  state = { ...this.props.accommodation };

  toggleFavorite = () => {
    this.setState(state => ({ favorite: !state.favorite }));
  };

  goToDetail = () => {
    this.props.history.push("accomodation/" + this.state._id);
  };

  render() {
    const { image, name, location, favorite, description } = this.state;
    return (
      <Grid item xs={12} sm={4} lg={3}>
        <Card className={this.props.classes.root}>
          <header onClick={this.goToDetail}>
            <img className={this.props.classes.thumbnail} src={image} alt="img of accomodation" />
          </header>
          <main>
            <h2>{name}</h2>
            <div className="sub-header">{location}</div>
            <p>{description}</p>
          </main>
          <footer>
            <HouseIcon
              onClick={this.toggleFavorite}
              className={favorite ? this.props.classes.houseIconFavorite : this.props.classes.houseIcon}
            />
          </footer>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(AccommodationCard));
