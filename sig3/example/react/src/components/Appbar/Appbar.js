import * as React from "react";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as classNames from "classnames";
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
  user: {
    marginRight: 32,

    color: "white",
  },
  pointer: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkContainer: {
    display: "flex",
    "& div:nth-child(2n)": {
      marginLeft: 16,
    },
  },
};

class Appbar extends React.PureComponent {
  state = {
    isAuthenticated: false,
    isLoginDialogOpen: false,
  };

  toggleAuthentication = () => {
    this.setState(prevState => ({
      isAuthenticated: !prevState.isAuthenticated,
    }));
  };

  toggleDialog = () => {
    this.setState(prevState => ({
      isLoginDialogOpen: !prevState.isLoginDialogOpen,
    }));
  };

  render() {
    const { isAuthenticated, isLoginDialogOpen } = this.state;
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.title}>
          <Link className={this.props.classes.link} to="/">
            {this.props.title}
          </Link>
        </div>
        {isAuthenticated && <div className={this.props.classes.user}>Welkom!</div>}
        {!isAuthenticated && (
          <div className={this.props.classes.linkContainer}>
            <div className={this.props.classes.pointer}>
              <Link className={this.props.classes.link} to="/create">
                Accommodatie aanmaken
              </Link>
            </div>
            <div
              className={classNames(this.props.classes.user, this.props.classes.pointer)}
              onClick={this.toggleDialog}
            >
              Inloggen
            </div>
          </div>
        )}
        <LoginDialog open={isLoginDialogOpen} handleLogin={this.toggleAuthentication} handleClose={this.toggleDialog} />
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);

Appbar.propTypes = {
  title: PropTypes.string.isRequired,
};
