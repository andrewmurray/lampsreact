import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TopBar from './components/TopBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TopBar title="Lamps" />
        
      </MuiThemeProvider>
    );
  }
}

export default App;
