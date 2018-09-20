import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Category from './Category';
import Media from './Media';
import Tabsbar from './Tabsbar.js';
import Bilde from './Bilde.js';
import CategoryPane from './CategoryPane.js'


class App extends Component {
  constructor(props){
    super(props);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick = (id) => {
    //do something
    console.log(id);
  }
  render() {
      return (
          //Må være flex-container
          <div className="App">
              <div className= "flex-item1">
                <Tabsbar/>
                <div className ="artPane - will be here">
                </div>
              </div>
              <div className = "flex-item2">
                <CategoryPane method ={this.handleCategoryClick}/>
              </div>
          </div>
      );
  }
}

export default App;
//Eksempel bruk av category og Media
/*
<Category text = "Katt"/>
<br></br>
<Media name = "picture" categories = {[{id:0, name:"Dyr"},{id:1 , name:"Biler"},{id:2, name:"Peperonice"}]}/>
*/

// Include  <Tabsbar/> in Apps div-tag too render Tabsbar
// include <Bilde svg="<svg>..." to render picture
