import * as React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import LoginDialog from "../Login/LoginDialog";
import { UserContext } from "../../common/context";

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
  userMenu: {
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
    this.props.history.push("/");
  };

  toggleDialog = () => {
    this.setState(prevState => ({
      isLoginDialogOpen: !prevState.isLoginDialogOpen,
    }));
  };

  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div className={this.props.classes.root}>
            <div className={this.props.classes.title} onClick={this.goHome}>
              {this.props.title}
            </div>
            {context.user ? (
              <div className={this.props.classes.userMenu} onClick={context.logout}>
                {context.user.username}
              </div>
            ) : (
              <div className={this.props.classes.userMenu} onClick={this.toggleDialog}>
                Login
                <LoginDialog open={this.state.isLoginDialogOpen} handleClose={this.toggleDialog} />
              </div>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withStyles(styles)(withRouter(Appbar));

Appbar.propTypes = {
  title: PropTypes.string.isRequired,
};
