import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {createDataList} from '../util/Util.js';
import CategoryPane from './CategoryPane.js';
import Tabsbar from './Tabsbar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Tabsbar/>
          <CategoryPane/>
      </div>
    );
  }
}

export default App;
