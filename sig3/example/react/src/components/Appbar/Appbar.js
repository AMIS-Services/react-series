import * as React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import LoginDialog from "../Login/LoginDialog";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
    overflow: "auto",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    cursor: "pointer",
    margin: "16px auto 16px 32px",
  },
  login: {
    marginRight: 32,
    color: "white",
    cursor: "pointer",
  },
};

class Appbar extends React.PureComponent {
  state = {
    isLoginDialogOpen: false,
  };

  goHome = () => {
    // TODO: use router
    window.location.replace("http://localhost:3000/");
  };

  toggleDialog = () => {
    this.setState(prevState => ({
      isLoginDialogOpen: !prevState.isLoginDialogOpen,
    }));
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.title} onClick={this.goHome}>
          {this.props.title}
        </div>
        <div className={this.props.classes.login} onClick={this.toggleDialog}>
          Login
        </div>
        <LoginDialog open={this.state.isLoginDialogOpen} handleClose={this.toggleDialog} />
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);

Appbar.propTypes = {
  title: PropTypes.string.isRequired,
};
