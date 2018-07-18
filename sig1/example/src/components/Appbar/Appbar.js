import * as React from 'react';
import './Appbar.css';

export default class Appbar extends React.Component {
  render() {
    return (
      <div className="appBar">
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}
