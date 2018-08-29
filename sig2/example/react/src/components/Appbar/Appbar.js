import * as React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    width: "100%",
    backgroundColor: "red",
    overflow: "auto",
    cursor: "pointer",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    margin: "16px auto 16px 32px",
  },
};

class Appbar extends React.Component {
  goHome = () => {
    window.location.replace("http://localhost:3000/");
  };

  render() {
    return (
      <div className={this.props.classes.root} onClick={this.goHome}>
        <div className={this.props.classes.title}>{this.props.title}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);
