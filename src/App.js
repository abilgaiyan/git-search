import React, { Component } from 'react';
import {  Route } from 'react-router-dom';

import './App.css';

import GitSearchList from './component/GitSearchList';
import GitSearchDetail from './component/GitSearchDetail';
class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Git Search</h1>
      {/* <Search /> */}
      <GitSearchList />
      <Route exact path="/search/:name" component={GitSearchDetail} />
      
      </div>
    );
  }
}

export default App;
