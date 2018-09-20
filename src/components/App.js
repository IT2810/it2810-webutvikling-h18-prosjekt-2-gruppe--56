import React, { Component } from 'react';
import './App.css';
import CategoryPane from './CategoryPane.js';
import Tabsbar from './Tabsbar.js';
import Tittel from './Tittel.js';
import Art from './Art.js';

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
            <div className="App">
                <div className ="headPane">
                    <Tittel artName = "Tittel..." />
                    <Tabsbar />
                </div>
                <div className = "bodyPane">
                    <Art />
                    <CategoryPane />
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
