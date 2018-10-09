import * as React from "react";
import { Card, Grid } from "@material-ui/core";
import "./AccommodationCard.css";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";

import { HouseIcon } from "../../resources/HouseIcon";

class AccommodationCard extends React.Component {
  state = { ...this.props.accommodation };

  toggleFavorite = async () => {
    await this.setState(state => ({ favorite: !state.favorite }));
    const { _id, createdAt, updatedAt, ...accommodation } = this.state;
    fetch(`accommodations/${this.state._id}`, {
      method: "PUT",
      body: JSON.stringify(accommodation),
    });
  };

  goToDetails = () => {
    this.props.history.push("accommodation/" + this.state._id);
  };

  render() {
    const { image, name, location, favorite, description } = this.state;

    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Card className="accommodation-card">
          <header onClick={this.goToDetails}>
            <img className="preview" src={image} alt="img of accomodation" />
          </header>
          <main>
            <h2>{name}</h2>
            <div className="sub-header">{location}</div>
            <p>{description}</p>
          </main>
          <footer>
            <HouseIcon
              onClick={this.toggleFavorite}
              className={favorite ? "heart-icon heart-icon-favorite" : "heart-icon"}
            />
          </footer>
        </Card>
      </Grid>
    );
  }
}

export default withRouter(AccommodationCard);
