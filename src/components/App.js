import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import {createDataList} from '../util/Util.js';
import CategoryPane from './CategoryPane.js';


class App extends Component {
  render() {
    return (
      <div id="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CategoryPane/>
      </div>
    );
  }
}

export default App;
