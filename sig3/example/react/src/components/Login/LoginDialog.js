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
        <div>
          Username:
          <Input />
          Password:
          <Input />
          {/* TODO: Register */}
          <Button onClick={this.handleLogin}>OK</Button>
          <Button onClick={this.props.handleClose}>Cancel</Button>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LoginDialog);
