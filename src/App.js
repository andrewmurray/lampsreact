import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TabBar from './components/TabBar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import PlanList from './components/PlanList';
import PlanEdit from './components/PlanEdit';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <TopBar title="Lamps" />
          <TabBar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/plans" component={PlanList} />
          <Route path="/plans/:planId" component={PlanEdit} />
        </Router>
      </MuiThemeProvider>
    );
  }
}
