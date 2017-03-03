import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class TopBar extends Component {
  render() {
    return (
      <AppBar title={this.props.title} />
    );
  }
}
