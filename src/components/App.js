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
//

/*
If good website with dynamic content
const categoryPicture = ["Dyr","Mat","Kjøretøy"];
const categoryText = ["Ibsen","Lotepus","Modleifen"];
const categoryData = [createDataList(categoryPicture, "Pictures" , 0),
createDataList(categoryText, "Text", 1)];
console.log(categoryData);
*/
/*format:    [{id : 0,
name : "Pictures",
array: [{id : 0, text : "Dyr", ....}]}]
*/
//Should make static counter or pass an argument as id, but easylife


export default App;
//Eksempel bruk av category og Media
/*
<Category text = "Katt"/>
<br></br>
<Media name = "picture" categories = {[{id:0, name:"Dyr"},{id:1 , name:"Biler"},{id:2, name:"Peperonice"}]}/>
*/
