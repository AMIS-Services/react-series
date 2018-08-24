import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class Page404 extends React.Component {
  render() {
    return (
      <div className="root">
        Oops! Something went wrong.
      </div>
    );
  }
}

export default withStyles(styles)(Page404);
