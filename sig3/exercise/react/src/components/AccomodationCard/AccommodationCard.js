import * as React from "react";
import { Card, Grid, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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
    cursor: "pointer",
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

  toggleFavorite = async () => {
    await this.setState(state => ({ favorite: !state.favorite }));
    // const { _id, createdAt, updatedAt, ...accommodation } = this.state;
    // fetch(`accommodations/${this.state.user_id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(accommodation),
    // });
  };

  goToDetail = () => {
    this.props.history.push("accommodation/" + this.state._id);
  };

  render() {
    const { image, name, location, description } = this.state;
    console.log(this.state);
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
          <HouseIcon
            onClick={this.toggleFavorite}
            className={!!this.state.favorite ? this.props.classes.houseIconFavorite : this.props.classes.houseIcon}
          />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(AccommodationCard));

AccommodationCard.propTypes = {
  accommodation: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
