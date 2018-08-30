import * as React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { fetch } from "../../common/fetch";
import Appbar from "../Appbar/Appbar";

const styles = {
  root: {
    height: "10%",
    display: "flex",
    flexDirection: "column",
    "& main": {
      width: "100%",
      marginLeft: 100,
    },
    "& h2": {
      marginLeft: 100,
    },
    "& p": {
      fontSize: 16,
      marginLeft: 100,
    },
    "& footer": {
      marginTop: "auto",
      alignSelf: "flex-end",
    },
  },
  imageCover: {
    width: "100%",
    maxHeight: 700,
    overflow: "hidden",
  },
  subHeader: {
    color: "red",
    fontSize: 12,
    marginLeft: 100,
  },
};

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
    if (!this.state.accommodation) return null;
    return (
      <div className={this.props.classes.root}>
        <Appbar title="AmisBnB" />
        <header>
          <img
            className={this.props.classes.imageCover}
            src={this.state.accommodation.image}
            alt={this.state.accommodation.name}
          />
        </header>
        <main>
          <h2>{this.state.accommodation.name}</h2>
          <div className={this.props.classes.subHeader}>{this.state.accommodation.location}</div>
          <p>{this.state.accommodation.description}</p>
        </main>
        <footer />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(AccommodationsDetail));
