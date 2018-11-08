import * as React from "react";
import { withStyles, Dialog, DialogTitle, Input, Button } from "@material-ui/core";

const styles = {
  title: {
    backgroundColor: "red",
    "& h2": {
      color: "white",
      fontWeight: "bold",
    },
  },
  userFields: {
    display: "flex",
    flexDirection: "column",
    margin: 16,
    "& div:nth-child(2n)": {
      marginTop: 16,
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 16,
  },
};

class LoginDialog extends React.Component {
  handleLogin = () => {
    // TODO: handle login
    this.props.handleClose();
  };

  render() {
    return (
      <Dialog open={this.props.open}>
        <DialogTitle className={this.props.classes.title}>Login</DialogTitle>
        <div className={this.props.classes.userFields}>
          <div>
            Username:
            <Input />
          </div>
          <div>
            Password:
            <Input />
          </div>
          {/* TODO: Register */}
        </div>
        <div className={this.props.classes.buttons}>
          <Button onClick={this.handleLogin}>OK</Button>
          <Button onClick={this.props.handleClose}>Cancel</Button>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LoginDialog);
